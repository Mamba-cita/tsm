const Shipment = require("../server/models/Shipment");
const Client = require("../server/models/Client");
const Transporter = require("../server/models/Transporter");
const Truck = require("../server/models/Truck");
const Trailer = require("../server/models/Trailer");
const Comodity = require("../server/models/Comodity");
const Destination = require("../server/models/DestinationDepot");
const Origin = require("../server/models/OrignDepot");
const Package = require("../server/models/Package");


const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLDateTime,
} = require("graphql");

// Client Type

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    account_no: { type: GraphQLString },
    director: { type: GraphQLString },
    contact: { type: GraphQLString },
    country: { type: GraphQLString },
    city: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

// Transporter
const TransporterType = new GraphQLObjectType({
  name: "Transporter",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    account_no: { type: GraphQLString },
    git: { type: GraphQLString },
    git_expiry: { type: GraphQLDateTime },
    director: { type: GraphQLString },
    contact: { type: GraphQLString },
    country: { type: GraphQLString },
    city: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

// Truck
const TruckType = new GraphQLObjectType({
  name: "Truck",
  fields: () => ({
    id: { type: GraphQLID },
    truck_reg: { type: GraphQLString },
    make: { type: GraphQLString },
    year: { type: GraphQLString },
    lnl: { type: GraphQLString },
    transporter: {
      type: TrailerType,
      resolve(parent, args) {
        return Transporter.findByID(parent.transporterId);
      },
    },
  }),
});

///Trailer

const TrailerType = new GraphQLObjectType({
  name: "Trailer",
  fields: () => ({
    id: { type: GraphQLID },
    trailer_no: { type: GraphQLString },
    year: { type: GraphQLString },
    trailer_type: { type: GraphQLString },
    trailer_capacity: { type: GraphQLString },
    transporter: {
      type: TrailerType,
      resolve(parent, args) {
        return Trailer.findByID(parent.trailerId);
      },
    },
  }),
});

/// comodity

const ComodityType = new GraphQLObjectType({
    name: "Comodity",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
    }),
  });
  
  /// Origin type

const OriginDepotType = new GraphQLObjectType({
    name: "Origin",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
    }),
  });
 /// Destinatin type
  const DestinationDepotType = new GraphQLObjectType({
    name: "Destination",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
    }),
  });
  
  /// packaging type

const PackageType = new GraphQLObjectType({
    name: "Package",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
    }),
  });

// Shipments

const ShipmentType = new GraphQLObjectType({
  name: "Shipment",
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
      resolve(parent, args) {
        return Client.findByID(parent.clientId);
      },
    },
  }),
});

// Query

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Shipments
    shipments: {
      type: GraphQLList(ShipmentType),
      resolve(parent, args) {
        return Shipment.find();
      },
    },
    shipment: {
      type: ShipmentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Shipment.findById(args.id);
      },
    },

    //clients

    clients: {
      type: GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },

    // Trucks

    trucks: {
      type: GraphQLList(TruckType),
      resolve(parent, args) {
        return Truck.find();
      },
    },
    truck: {
      type: TruckType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Truck.findById(args.id);
      },
    },

    //Trailers

    trailers: {
      type: GraphQLList(TrailerType),
      resolve(parent, args) {
        return Trailer.find();
      },
    },
    trailer: {
      type: TrailerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Trailer.findById(args.id);
      },
    },

    //Transporters

    transporters: {
      type: GraphQLList(TransporterType),
      resolve(parent, args) {
        return Transporter.find();
      },
    },
    transporter: {
      type: TransporterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Transporter.findById(args.id);
      },
    },

    //Comodity

    comodities: {
        type: GraphQLList(ComodityType),
        resolve(parent, args) {
          return Comodity.find();
        },
      },
      comodity: {
        type: ComodityType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Comodity.findById(args.id);
        },
      },

        //Packaging type

    packaging: {
        type: GraphQLList(PackageType),
        resolve(parent, args) {
          return Package.find();
        },
      },
      packaging_types: {
        type: PackageType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Package.findById(args.id);
        },
      },

       //Origin

    origin_depot: {
        type: GraphQLList(OriginDepotType),
        resolve(parent, args) {
          return Origin.find();
        },
      },
      origin_depots: {
        type: OriginDepotType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Origin.findById(args.id);
        },
      },

        //Destination

    destination_depot: {
        type: GraphQLList(DestinationDepotType),
        resolve(parent, args) {
          return Destination.find();
        },
      },
      destination_depots: {
        type: DestinationDepotType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Destination.findById(args.id);
        },
      },
  },
});


//Mutations

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //addclient
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        account_no: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          account_no: args.account_no,
        });
        return client.save();
      },
    },

    //delete client
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndRemove(args.id);
      },
    },

    //add comodity
    addComodity: {
        type: ComodityType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const comodity = new Comodity({
            name: args.name,
          });
          return comodity.save();
        },
      },
  
      //delete comodity
      deleteComodity: {
        type: ComodityType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return Comodity.findByIdAndRemove(args.id);
        },
      },

       //add origin
    addOrigin: {
        type: OriginDepotType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const origin = new Origin({
            name: args.name,
          });
          return origin.save();
        },
      },
  
      //delete origin
      deleteOrigin: {
        type: OriginDepotType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return Origin.findByIdAndRemove(args.id);
        },
      },

        //add destination
    addOrigin: {
        type: OriginDepotType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const destination = new Destination({
            name: args.name,
          });
          return destination.save();
        },
      },
  
      //delete destination
      deleteDestination: {
        type: DestinationDepotType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return Destination.findByIdAndRemove(args.id);
        },
      },


       //add packaging type
    addPackaging: {
        type: PackageType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve(parent, args) {
          const packaging = new Package({
            name: args.name,
          });
          return packaging.save();
        },
      },
  
      //delete packaging type
      deletePackaging: {
        type: PackageType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
        },
        resolve(parent, args) {
          return Package.findByIdAndRemove(args.id);
        },
      },


    //add truck
    addTruck: {
      type: TruckType,
      args: {
        truck_reg: { type: GraphQLNonNull(GraphQLString) },
        make: { type: GraphQLNonNull(GraphQLString) },
        year: { type: GraphQLNonNull(GraphQLString) },
        lnl: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const truck = new Truck({
          truck_reg: args.truck_reg,
          make: args.make,
          year: args.year,
          lnl: args.lnl,
        });
        return truck.save();
      },
    },

    //delete truck
    deleteTruck: {
      type: TruckType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Truck.findByIdAndRemove(args.id);
      },
    },

    //add trailer
    addClient: {
      type: TrailerType,
      args: {
        trailer_no: { type: GraphQLNonNull(GraphQLString) },
        year: { type: GraphQLNonNull(GraphQLString) },
        trailer_type: { type: GraphQLNonNull(GraphQLString) },
        trailer_capacity: { type: GraphQLNonNull(GraphQLString) },

      },
      resolve(parent, args) {
        const trailer = new Trailer({
            trailer_no: args.trailer_no,
            year: args.year,
            trailer_type: args.trailer_type,
            trailer_capacity: args.trailer_capacity,

        });
        return trailer.save();
      },
    },

    //delete trailer
    deleteTrailer: {
      type: TrailerType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Trailer.findByIdAndRemove(args.id);
      },
    },

    // add transporter

    addTransporter: {
      type: TransporterType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        account_no: { type: GraphQLNonNull(GraphQLString) },
        git: { type: GraphQLNonNull(GraphQLString) },
        git_expiry: { type: GraphQLNonNull(GraphQLString) },
        director: { type: GraphQLNonNull(GraphQLString) },
        contact: { type: GraphQLNonNull(GraphQLString) },
        country: { type: GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const transporter = new Transporter({
          name: args.name,
          email: args.email,
          account_no: args.account_no,
          git: args.git,
          git_expiry: args.git_expiry,
          director: args.director,
          contact: args.contact,
          country: args.country,
          city: args.city,
          address: args.address,
        });
        return transporter.save();
      },
    },

    //delete transporter
    deleteTransporter: {
      type: TransporterType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Transporter.findByIdAndRemove(args.id);
      },
    },

    // add shipment

    addShipment: {
      type: ShipmentType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        account_no: { type: GraphQLNonNull(GraphQLString) },
        git: { type: GraphQLNonNull(GraphQLString) },
        git_expiry: { type: GraphQLNonNull(GraphQLString) },
        director: { type: GraphQLNonNull(GraphQLString) },
        contact: { type: GraphQLNonNull(GraphQLString) },
        country: { type: GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const shipment = new Shipment({
          name: args.name,
          email: args.email,
          account_no: args.account_no,
          git: args.git,
          git_expiry: args.git_expiry,
          director: args.director,
          contact: args.contact,
          country: args.country,
          city: args.city,
          address: args.address,
        });
        return shipment.save();
      },
    },

    //delete shipment

    deleteShipment: {
      type: ShipmentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Shipment.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
