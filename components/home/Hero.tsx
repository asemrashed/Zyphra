'use client'

import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType } from 'embla-carousel'
import Image from 'next/image'

export default function Hero({slides}: {slides: Array<{id: number, url: string, slogan: string, imgUrl: string}>}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay({ delay: 3000})])

  

  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(true)

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevDisabled(!api.canScrollPrev())
    setNextDisabled(!api.canScrollNext())
  }, [])

  const onPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    emblaApi.plugins()?.autoplay?.stop()
  }, [emblaApi])

  const onNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    emblaApi.plugins()?.autoplay?.stop()
  }, [emblaApi])

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      emblaApi.plugins()?.autoplay?.stop()
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())

    onSelect(emblaApi)

    emblaApi.on('select', () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      onSelect(emblaApi)
    })

    emblaApi.plugins()?.autoplay?.play()
  }, [emblaApi, onSelect])

  return (
    <section className="max-w-4xl mx-auto mb-6 md:mb-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 px-4"
            >
              <div className={`h-50 md:h-100 rounded-xl flex items-center font-bold relative overflow-hidden`}>
                <Image src={slide.imgUrl} alt={slide.slogan} width={1200} height={600} className="object-cover rounded-xl" />
                <div className="absolute w-1/2 ml-3 p-4">
                  <div className="flex flex-col gap-3 h-full items-start justify-center">
                    <h1 className="text-primary text-xl md:text-4xl">{slide.slogan}</h1>
                    <button className='btn btn-sm md:btn-md btn-primary'>Explore</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-6 mx-3">
        <div className="flex gap-4">
          <button
            onClick={onPrev}
            disabled={prevDisabled}
            className={`w-8 h-8 rounded-full border transition 
              ${prevDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-primary'}`}
          >
            ‹
          </button>

          <button
            onClick={onNext}
            disabled={nextDisabled}
            className={`w-8 h-8 rounded-full border transition 
              ${nextDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-primary'}`}
          >
            ›
          </button>
        </div>

        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`w-3 h-3 rounded-full transition
                ${index === selectedIndex
                  ? 'bg-primary'
                  : 'bg-gray-300 hover:bg-primary/50'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}