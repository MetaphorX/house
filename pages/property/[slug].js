import { client } from "../../lib/client"


const Property = ({title, area, camp, location, propertyType, mainImage,price,bedrooms,id,host, slug}) =>{
    return(
        <div>
            {/* beginning */}
            
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