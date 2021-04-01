import { Card, Icon } from "semantic-ui-react"

const PropertyCard = (props) => {
    const {property} = props
    return (
        <Card
        image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/o9uzuska-1576700104.jpg?crop=1.00xw:0.753xh;0,0.0513xh&resize=980:*'
        header={property.street}
        meta={property.price}
        description={`Beds: ${property.beds} Baths:${property.baths} sq feet: ${property.sq_ft}`}
        extra={(
            <a>
              <Icon name='bed' />
              {property.beds}
            </a>

          )}
        />
    )
}

export default PropertyCard