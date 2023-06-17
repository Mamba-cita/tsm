const Shipment = require('../server/models/Shipment');
const Client = require('../server/models/Client');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList   } = require('graphql');



// Client Type

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        account_no: { type: GraphQLString }
    })
});

const ShipmentType = new GraphQLObjectType({
    name: 'Shipment',
    fields: () => ({
        shipment_id: { type: GraphQLID },
        cargo_type: { type: GraphQLString },
        consignee: { type: GraphQLString },
        loading_date: { type: GraphQLString },
        last_loading_date: { type: GraphQLString },
        clearing_agent: { type: GraphQLString },
        origin_depot: { type: GraphQLString },
        destination_depot: { type: GraphQLString },
        loading_contact: { type: GraphQLString },
        offloading_contact: { type: GraphQLString },
        commodity: { type: GraphQLString },
        packaging_type: { type: GraphQLString },
        total_tons: { type: GraphQLString },
        cargo_rate: { type: GraphQLString },
        cargo_type: { type: GraphQLString },
        payment_period: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args){
                return clients.findByID(parent.clientId);
            }
        }

    })
});

// Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        shipments: {
            type: GraphQLList(ShipmentType),
            resolve(parent, args){
              return Shipment.find();
            }
        },
        shipment: {
            type: ShipmentType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args){
                return Shipment.findById(args.id);
            }
        },
        clients: {
            type: GraphQLList(ClientType),
            resolve(parent, args){
                return Client.find();
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args){
                return Client.findById(args.id)
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
})