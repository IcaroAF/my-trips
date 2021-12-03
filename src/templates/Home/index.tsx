import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show my favorite spots in the world"
        canonical="https://my-trips.icaroassis.com.br"
        openGraph={{
          url: 'https://my-trips.icaroassis.com.br',
          title: 'My Trips',
          description:
            'A simple project to show my favorite spots in the world',
          images: [
            {
              url: 'https://my-trips.icaroassis.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
