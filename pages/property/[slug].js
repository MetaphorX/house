import { client, urlFor } from "../../lib/client"
import Image from "../../components/Image"
import {MdPriceChange} from "react-icons/md"
import { FaBed, FaHome, FaBath, FaLightbulb } from "react-icons/fa"
import {ImLocation2} from "react-icons/im"



const Property = ({title, area,description,toilet,meter,images, camp, location, propertyType, mainImage,price,bedrooms,id,host, slug}) =>{
    return(
        <div>
            {/* beginning */}
            
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <Image identifier="main-image" image={mainImage} className="bg-gray-100 rounded-lg"/>
                {images?.map((item, i) =>(
                            <img
                                src={urlFor(item)}
                            />
                        ))}
                </div>
                <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                <p className="mt-4 text-gray-500">{description}</p>
                

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    <div className="border-t border-gray-200 pt-4 text-red-500 ">
                        <FaHome fontSize={30}/>
                        <dd className="mt-2 text-lg text-gray-500"> {propertyType}</dd>
                    </div>
                    <div className="border-t border-gray-200 pt-4 text-red-500 ">
                        <ImLocation2 fontSize={30}/>
                        <dd className="mt-2 text-lg text-gray-500"> {area}, {camp}</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4 text-red-500">
                    <FaBed fontSize={30}/>
                    <dd className="mt-2 text-lg text-gray-500">{bedrooms}</dd>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 text-red-500">
                    <FaBath fontSize={30}/>
                    <dd className="mt-2 text-lg text-gray-500">{toilet}</dd>
                    </div>

                    <div className="border-t border-gray-200 pt-4 text-red-500">
                    <FaLightbulb fontSize={30}/>
                    <dd className="mt-2 text-lg text-gray-500">{meter} </dd>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 text-red-500">
                    <MdPriceChange fontSize={30}/>
                    <dd className="mt-2 text-lg text-gray-500">${price} </dd>
                    </div>

                </dl>
                </div>
                {/* Agent Info */}
                
                <div className="max-w-sm -space-x-2 bg-white rounded-lg border shadow-lg dark:bg-white-800">
                    <div className="flex flex-col items-center pb-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={urlFor(host?.image)} alt={host?.name} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{host?.name}</h5>
                        <span className="text-md text-gray-500 dark:text-gray-900">{host?.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">House Agent</span>
                        <div className="flex mt-4 space-x-3 lg:mt-6">
                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View Agent</a>
                        </div>
                    </div>
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
        meter,
        camp,
		location,
		propertyType,
		mainImage,
        images,
		price,
		bedrooms,
        toilet,
		description,
		host ->{
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
                meter: property.meter,
                camp: property.camp,
				location: property.location,
				propertyType: property.propertyType,
				mainImage: property.mainImage,
				images: property.images,
				price: property.price,
				bedrooms:property.bedrooms,
				toilet:property.toilet,
				description: property.description,
				host: property.host
			}
		}
	}
}


export default Property