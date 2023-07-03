const Shipment = require("../models/Shipment");
const Client = require("../models/Client");
const Transporter = require("../models/Transporter");
const Truck = require("../models/Truck");
const Trailer = require("../models/Trailer");
const Comodity = require("../models/Comodity");
const Destination = require("../models/DestinationDepot");
const Origin = require("../models/OrignDepot");
const Package = require("../models/Package");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLDateTime,
  GraphQLEnumType,
} = require("graphql");

// Moves
const ChildOrderType = new GraphQLObjectType({
  name: 'ChildOrder',
  fields: () => ({
    id: { type: GraphQLID },
    truck_reg: { type: GraphQLString },
    trailer: { type: GraphQLString },
    driver: { type: GraphQLString },
    transporter: { type: GraphQLString },
    make: { type: GraphQLString },
    arrival_loading: { type: GraphQLString },
    gateinl1: { type: GraphQLString },
    gateoutl1: { type: GraphQLString },
    cargo_type: { type: GraphQLString },
    trans_rate_type: { type: GraphQLString },
    cargo_rate_type: { type: GraphQLString },
    cargo_rate: { type: GraphQLString },
    trans_rate: { type: GraphQLString },
    arrivalb1: { type: GraphQLString },
    arrivalb2: { type: GraphQLString },
    arrivald1: { type: GraphQLString },
    gateind1: { type: GraphQLString },
    qt_to_load: { type: GraphQLString },
    qt_loaded1: { type: GraphQLString },
    qt_loaded2: { type: GraphQLString },
    offl_qt1: { type: GraphQLString },
    offl_qt2: { type: GraphQLString },
    client_del: { type: GraphQLString },
    tsm_del: { type: GraphQLString },
    client_de2: { type: GraphQLString },
    tsm_de2: { type: GraphQLString },
    cont_no_1: { type: GraphQLString },
    cont_no_2: { type: GraphQLString },
    no_of_bags: { type: GraphQLString },
    bag_size: { type: GraphQLString },
    no_of_bags: { type: GraphQLString },
    bag_size: { type: GraphQLString },
    gateoutd1: { type: GraphQLString },
    arrival_emptyd: { type: GraphQLString },
    depurture_emptyd: { type: GraphQLString },
    cargo_inv: { type: GraphQLString },
    cargo_inv_date: { type: GraphQLString },
    cargo_inv_status: { type: GraphQLString },
    trans_inv: { type: GraphQLString },
    trans_inv_date: { type: GraphQLString },
    trans_inv_status: { type: GraphQLString },
  }),
});

// Order Type
// const OrderType = new GraphQLObjectType({
//   name: "Order",
//   fields: () => ({
//     id: { type: GraphQLID },
//     cargo_type: { type: GraphQLString },
//     consignee: { type: GraphQLString },
//     loading_date: { type: GraphQLString },
//     last_loading_date: { type: GraphQLString },
//     clearing_agent: { type: GraphQLString },
//     origin_depot: { type: GraphQLString },
//     destination_depot: { type: GraphQLString },
//     loading_contact: { type: GraphQLString },
//     offloading_contact: { type: GraphQLString },
//     commodity: { type: GraphQLString },
//     packaging_type: { type: GraphQLString },
//     total_tons: { type: GraphQLString },
//     cargo_rate: { type: GraphQLString },
//     cargo_rate_type: { type: GraphQLString },
//     payment_period: { type: GraphQLString },
//     children: {
//       type: GraphQLList(ChildOrderType),
//       resolve(parent, args) {
//         // Fetch and return the child orders for the parent order
//         return ChildOrder.find({ _id: { $in: parent.children } });
//       },
//     },
//   }),
  
// });




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
    git_expiry: { type: GraphQLString },
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
    id: { type: GraphQLID },
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
    cargo_rate_type: { type: GraphQLString },
    payment_period: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

// Query

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {

//Orders

order: {
  type: OrderType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Order.findById(args.id);
  },
},

orders: {
  type:  GraphQLList(OrderType),
  resolve(parent, args) {
    return Order.find();
  },
},

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
    //update transporter
    deleteTransporter: {
      type: TransporterType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        account_no: { type: GraphQLString },
        git: { type: GraphQLString },
        git_expiry: { type: GraphQLString },
        director: { type: GraphQLString },
        contact: { type: GraphQLString },
        country: { type: GraphQLString },
        city: { type: GraphQLString },
        address: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Transporter.findByIdAndUpdate(
          args.id,
          {
            $set: {
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
            },
          },
          {
            new: true,
          }
        );
      },
    },
//create order








    // add shipment

    addShipment: {
      type: ShipmentType,
      args: {
        cargo_type: { type: GraphQLNonNull(GraphQLString) },
        consignee: { type: GraphQLNonNull(GraphQLString) },
        loading_date: { type: GraphQLNonNull(GraphQLString) },
        last_loading_date: { type: GraphQLNonNull(GraphQLString) },
        clearing_agent: { type: GraphQLNonNull(GraphQLString) },
        origin_depot: { type: GraphQLNonNull(GraphQLString) },
        destination_depot: { type: GraphQLNonNull(GraphQLString) },
        loading_contact: { type: GraphQLNonNull(GraphQLString) },
        offloading_contact: { type: GraphQLNonNull(GraphQLString) },
        total_tons: { type: GraphQLNonNull(GraphQLString) },
        commodity: { type: GraphQLNonNull(GraphQLString) },
        packaging_type: { type: GraphQLNonNull(GraphQLString) },
        cargo_rate_type: { type: GraphQLNonNull(GraphQLString) },
        cargo_rate: { type: GraphQLNonNull(GraphQLString) },
        payment_period: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Inbound" },
              outside: { value: "Outside Loading Point" },
              inside: { value: "Inside Loading Point" },
              awaiting_docs: { value: "Loaded Awaiting Docs" },
              onjourney: { value: "On_Journey" },
              offloading: { value: "Offloading" },
              empty_return: { value: "Offloaded On Empty Return" },
              complete: { value: "Completed" },
              invoice: { value: "Invoiced" },
              paid: { value: "Paid" },
            },
          }),
          defaultValue: "Inbound",
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const shipment = new Shipment({
          cargo_type: args.cargo_type,
          consignee: args.consignee,
          loading_date: args.loading_date,
          last_loading_date: args.last_loading_date,
          clearing_agent: args.clearing_agent,
          origin_depot: args.origin_depot,
          destination_depot: args.destination_depot,
          loading_contact: args.loading_contact,
          offloading_contact: args.offloading_contact,
          total_tons: args.total_tons,
          commodity: args.commodity,
          packaging_type: args.packaging_type,
          cargo_rate_type: args.cargo_rate_type,
          payment_period: args.payment_period,
          cargo_rate: args.cargo_rate,
          clientId: args.clientId,
          status: args.status,
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

    //update shipment

    // updateShipment: {
    //   type: ShipmentType,
    //   args: {
    //     id: { type: GraphQLNonNull(GraphQLID) },
    //     cargo_type: { type: GraphQLString },
    //     consignee: { type: GraphQLString },
    //     loading_date: { type: GraphQLString },
    //     last_loading_date: { type: GraphQLString },
    //     clearing_agent: { type: GraphQLString },
    //     origin_depot: { type: GraphQLString },
    //     destination_depot: { type: GraphQLString },
    //     loading_contact: { type: GraphQLString },
    //     offloading_contact: { type: GraphQLString },
    //     total_tons: { type: GraphQLString },
    //     commodity: { type: GraphQLString },
    //     packaging_type: { type: GraphQLString },
    //     cargo_rate_type: { type: GraphQLString },
    //     cargo_rate: { type: GraphQLString },
    //     payment_period: { type: GraphQLString },
    //     status: {
    //       type: new GraphQLEnumType({
    //         name: "ProjectUpdatedStatus",
    //         values: {
    //           new: { value: "Inbound" },
    //           outside: { value: "Outside Loading Point" },
    //           inside: { value: "Inside Loading Point" },
    //           awaiting_docs: { value: "Loaded Awaiting Docs" },
    //           onjourney: { value: "On_Journey" },
    //           offloading: { value: "Offloading" },
    //           empty_return: { value: "Offloaded On Empty Return" },
    //           complete: { value: "Completed" },
    //           invoice: { value: "Invoiced" },
    //           paid: { value: "Paid" },
    //         },
    //       }),
    //     },
    //   },
    //   resolve(parent, args) {
    //     return Shipment.findByIdAndUpdate(
    //       args.id,
    //       {
    //         $set: {
    //           cargo_type: args.cargo_type,
    //           consignee: args.consignee,
    //           loading_date: args.loading_date,
    //           last_loading_date: args.last_loading_date,
    //           clearing_agent: args.clearing_agent,
    //           origin_depot: args.origin_depot,
    //           destination_depot: args.destination_depot,
    //           loading_contact: args.loading_contact,
    //           offloading_contact: args.offloading_contact,
    //           total_tons: args.total_tons,
    //           commodity: args.commodity,
    //           packaging_type: args.packaging_type,
    //           cargo_rate_type: args.cargo_rate_type,
    //           payment_period: args.payment_period,
    //           cargo_rate: args.cargo_rate,
    //           clientId: args.clientId,
    //           status: args.status,
    //         },
    //       },
    //       {
    //         new: true,
    //       }
    //     );
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
