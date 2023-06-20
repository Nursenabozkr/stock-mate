import { ChartBarIcon, PencilSquareIcon, UsersIcon,ArchiveBoxIcon,ClipboardDocumentIcon,DocumentTextIcon,MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'

import './stats.css'
const features = [
  {
    name: 'Depodaki ürünlerin takibini yapma imkanı',
    description:
      '',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Ürünlerin miktarının ve stok durumunun izlenmesi',
    description: '',
    icon: ChartBarIcon,
  },
  {
    name: 'Depoya giren ve çıkan ürünlerin kaydını tutma',
    description: '',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Tedarikçi bilgilerinin görüntülenmesi',
    description:
      '',
    icon: UsersIcon,
  },
  {
    name: 'Yeni ürün ekleyebilme ve ürünleri düzenleyebilme imkanı',
    description: '',
    icon: PencilSquareIcon,
  },
  {
    name: 'Depo yönetimi için çeşitli raporlar sunulması',
    description: '',
    icon: DocumentTextIcon,
  },
  {
    name: 'Birden fazla depo takibi yapabilme imkanı',
    description: '',
    icon: MagnifyingGlassCircleIcon,
  },
]

export default function HomeStats() {
  return (
    <div className="relative  pb-32  ">
    <div className="overflow-hidden bg-gray-900 pb-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div class="banner d-flex align-items-center mt-5 py-24 sm:py-32 ">
<div class="banner-left">
  
<div className="lg:max-w-lg">

      <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-4xl">Stok yönetiminizi kolaylaştırın!</p>
      <p className="mt-6 text-lg leading-6  text-gray-400">
      Bu web sitesi, bir depodaki ürünlerin takibini kolaylaştıran bir platformdur. Site, depoda hangi ürünlerin bulunduğunu ve bunların miktarını izlemek için tasarlanmıştır. Depoya giren ve çıkan ürünlerin kaydını tutar ve envanter yönetimine yardımcı olur.<br/><br/> Kullanıcılar, depodaki ürünlerin stok durumunu kontrol etmek için web sitesinde arama yapabilirler. Ayrıca, kullanıcılar ürünlerin tedarikçi bilgilerini görüntüleyebilir ve yeni ürünler ekleyebilirler. Sitenin arayüzü kullanıcı dostudur ve depodaki ürünlerin listesi, kolay gezinme için kategorilere ayrılmıştır. Ayrıca, kullanıcılar ürünlerin stok seviyelerini belirleyebilir ve stok seviyesinin belirli bir eşiğin altına düştüğünde otomatik bildirim alabilirler. Site ayrıca, kullanıcılara depo yönetimi için çeşitli raporlar sunar ve bu raporlar, ürün satışlarını ve stok durumunu anlamalarına yardımcı olur.
      </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none pl-5">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-semibold italic text-white ">
              <feature.icon className="absolute left-1 top-1 h-5 w-5  text-gray-500" aria-hidden="true" />
              {feature.name}
            </dt>{' '}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
</div>
<div class="banner-right pr-5 d-flex bg-white">
    <div class="family">
    <img src="https://images.pexels.com/photos/5498224/pexels-photo-5498224.jpeg" alt="img" class="img-fluid"></img>
        <img src="https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" class="img-fluid"></img>
        <img src="https://images.pexels.com/photos/4483555/pexels-photo-4483555.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" class="img-fluid"></img>
        <img src="https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" class="img-fluid"></img>

  

    </div>
    <div class="sale">
    <img src="https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" class="img-fluid"></img>
    <img src="https://images.pexels.com/photos/4483555/pexels-photo-4483555.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="img" class="img-fluid"></img>
    <img src="https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" class="img-fluid"></img>
    <img src="https://images.pexels.com/photos/5498224/pexels-photo-5498224.jpeg" alt="img" class="img-fluid"></img>
    </div>
</div>
</div>

    </div>
       </div>
       </div>
  )
}