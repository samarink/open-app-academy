const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require('mongoose');

const God = mongoose.model('god');
const Abode = mongoose.model('abode');
const Emblem = mongoose.model('emblem');
const GodType = require('./god_type');
const AbodeType = require('./abode_type');
const EmblemType = require('./emblem_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    newGod: {
      type: GodType,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { name, type, description }) {
        return new God({ name, type, description }).save();
      }
    },
    removeGod: {
      type: GodType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return God.deleteOne({ _id: id });
      }
    },
    updateGod: {
      type: GodType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { id, name, type, description }) {
        const updateObj = {};

        updateObj.id = id;
        if (name) updateObj.name = name;
        if (type) updateObj.type = type;
        if (description) updateObj.description = description;

        return God.findOneAndUpdate({ _id: id }, { $set: updateObj }, { new: true }, (err, god) => {
          return god;
        });
      }
    },
    addGodRelative: {
      type: GodType,
      args: {
        godId: { type: GraphQLID },
        relativeId: { type: GraphQLID },
        relationship: { type: GraphQLString }
      },
      resolve(parentValue, { godId, relativeId, relationship }) {
        return God.addRelative(godId, relativeId, relationship);
      }
    },
    removeGodRelative: {
      type: GodType,
      args: {
        godId: { type: new GraphQLNonNull(GraphQLID) },
        relativeId: { type: new GraphQLNonNull(GraphQLID) },
        relationship: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { godId, relativeId, relationship }) {
        return God.removeRelative(godId, relativeId, relationship);
      }
    },
    addGodEmblem: {
      type: GodType,
      args: {
        godId: { type: new GraphQLNonNull(GraphQLID) },
        emblemId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { godId, emblemId }) {
        return God.addEmblem(godId, emblemId);
      }
    },
    removeGodEmblem: {
      type: GodType,
      args: {
        godId: { type: new GraphQLNonNull(GraphQLID) },
        emblemId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { godId, emblemId }) {
        return God.removeEmblem(godId, emblemId);
      }
    },
    updateGodAbode: {
      type: GodType,
      args: {
        godId: { type: new GraphQLNonNull(GraphQLID) },
        abodeId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { godId, abodeId }) {
        return God.updateAbode(godId, abodeId);
      }
    },
    addGodDomain: {
      type: GodType,
      args: {
        godId: { type: new GraphQLNonNull(GraphQLID) },
        domain: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { godId, domain }) {
        return God.addDomain(godId, domain);
      }
    },
    removeGodDomain: {
      type: GodType,
      args: {
        godId: { type: new GraphQLNonNull(GraphQLID) },
        domain: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { godId, domain }) {
        return God.removeDomain(godId, domain);
      }
    },
    newAbode: {
      type: AbodeType,
      args: {
        name: { type: GraphQLString },
        coordinates: { type: GraphQLString }
      },
      resolve(parentValue, { name, coordinates }) {
        return new Abode({ name, coordinates }).save();
      }
    },
    deleteAbode: {
      type: AbodeType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Abode.deleteOne({ _id: id });
      }
    },
    updateAbode: {
      type: AbodeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString }
      },
      resolve(parentValue, { id, name }) {
        return Abode.findOneAndUpdate(
          { _id: id },
          { $set: { name } },
          { new: true },
          (err, abode) => {
            return abode;
          }
        );
      }
    },
    newEmblem: {
      type: EmblemType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
        return new Emblem({ name }).save();
      }
    },
    deleteEmblem: {
      type: EmblemType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Emblem.deleteOne({ _id: id });
      }
    },
    updateEmblem: {
      type: EmblemType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString }
      },
      resolve(parentValue, { id, name }) {
        return Emblem.findOneAndUpdate(
          { _id: id },
          { $set: { name } },
          { new: true },
          (err, emblem) => {
            return emblem;
          }
        );
      }
    }
  }
});

module.exports = mutation;
