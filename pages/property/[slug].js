import { FaBed, FaHome } from "react-icons/fa"
import {ImLocation2} from "react-icons/im"
import { client } from "../../lib/client"


const Property = ({title, area,description, camp, location, propertyType, mainImage,price,bedrooms,id,host, slug}) =>{
    return(
        <div>
            {/* beginning */}
            
<div className="bg-white">
  <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" className="bg-gray-100 rounded-lg"/>
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" className="bg-gray-100 rounded-lg"/>
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" className="bg-gray-100 rounded-lg"/>
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" className="bg-gray-100 rounded-lg"/>
    </div>
    <div>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-gray-500">{description}</p>
      

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-red-500"> 
          <FaHome fontSize={30}/>
          <span className="mt-2 xl:mt-0">
					{propertyType}
				</span>
          </dt>
        
        </div>

        <div className="border-t border-gray-200 pt-4 text-red-500 ">
            <ImLocation2 fontSize={30}/>
            <dd className="mt-2 text-sm text-gray-500"> {area}, {camp}</dd>
        </div>

        <div className="border-t border-gray-200 pt-4 text-red-500">
         <FaBed fontSize={30}/>
          <dd className="mt-2 text-sm text-gray-500">{bedrooms}</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Finish</dt>
          <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Includes</dt>
          <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Considerations</dt>
          <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

            {/* end */}

        </div>
    )
}








export const getServerSideProps = async (pageContext)=>{
    const pageSlug = pageContext.query.slug
     
	const query = `*[_type == "property" && slug.current == $pageSlug][0]{
		title,
        area,
        camp,
		location,
		propertyType,
		mainImage,images,
		price,
		bedrooms,
		description,
		agent ->{
			_id,
			name,
			slug,
			image
		}
	}`

	const property = await client.fetch(query, {pageSlug})

	if(!property){
		return {
			props:null,
			notFound: true
		}
	}
	else{
		return{
			props:{
				title: property.title,
                area: property.area,
                camp: property.camp,
				location: property.location,
				propertyType: property.propertyType,
				mainImage: property.mainImage,
				images: property.images,
				price: property.price,
				bedrooms:property.bedrooms,
				description: property.description,
				agent: property.agent
			}
		}
	}
}


export default Property