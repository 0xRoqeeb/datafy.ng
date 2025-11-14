import { upgradeData } from '@/app/api/data'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Upgrade = () => {
  return (
    <section className='py-20' id='upgrade'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-2 gap-10 items-center'>
          <div>
            <p className='text-white font-medium'>Datafy<span className='text-primary'>upgrade</span></p>
            <h2 className='text-white sm:text-40 text-30  font-medium mb-5'>
              Power your payments and crypto with Datafy
            </h2>
            <p className='text-muted/60 text-18 mb-7'>
              Fast, secure, and affordable tools to pay bills, buy airtime, and trade crypto—no middlemen, no hassle.
            </p>
            <div className='grid sm:grid-cols-2  text-nowrap gap-5'>
              {upgradeData.map((item, index) => (
                <div key={index} className='flex gap-5'>
                  <div>
                    <Icon
                      icon='la:check-circle-solid'
                      width='24'
                      height='24'
                      className='text-white group-hover:text-primary'
                    />
                  </div>
                  <div>
                    <h4 className='text-18 text-muted/60'>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='ml-0 lg:ml-7'>
              <Image
                src='/images/upgrade/img-upgrade.png'
                alt='image'
                width={625}
                height={580}
                className='-mr-5'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade
