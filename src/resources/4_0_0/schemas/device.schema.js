const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Device Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Device',
	description:
		'A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Device_Enum_schema',
					values: { Device: { value: 'Device' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'Unique instance identifiers assigned to a device by manufacturers other organizations or owners.',
		},
		definition: {
			type: new GraphQLUnionType({
				name: 'Devicedefinition_definition_Union',
				description: 'The reference to the definition for the device.',
				types: () => [require('./devicedefinition.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'DeviceDefinition') {
						return require('./devicedefinition.schema.js');
					}
				},
			}),
			description: 'The reference to the definition for the device.',
		},
		udiCarrier: {
			type: new GraphQLList(require('./deviceudicarrier.schema.js')),
			description:
				'Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Status of the Device availability.',
		},
		status: {
			type: CodeScalar,
			description: 'Status of the Device availability.',
		},
		statusReason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Reason for the dtatus of the Device availability.',
		},
		_distinctIdentifier: {
			type: require('./element.schema.js'),
			description:
				'The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product.',
		},
		distinctIdentifier: {
			type: GraphQLString,
			description:
				'The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product.',
		},
		_manufacturer: {
			type: require('./element.schema.js'),
			description: 'A name of the manufacturer.',
		},
		manufacturer: {
			type: GraphQLString,
			description: 'A name of the manufacturer.',
		},
		_manufactureDate: {
			type: require('./element.schema.js'),
			description: 'The date and time when the device was manufactured.',
		},
		manufactureDate: {
			type: DateTimeScalar,
			description: 'The date and time when the device was manufactured.',
		},
		_expirationDate: {
			type: require('./element.schema.js'),
			description:
				'The date and time beyond which this device is no longer valid or should not be used (if applicable).',
		},
		expirationDate: {
			type: DateTimeScalar,
			description:
				'The date and time beyond which this device is no longer valid or should not be used (if applicable).',
		},
		_lotNumber: {
			type: require('./element.schema.js'),
			description: 'Lot number assigned by the manufacturer.',
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number assigned by the manufacturer.',
		},
		_serialNumber: {
			type: require('./element.schema.js'),
			description:
				'The serial number assigned by the organization when the device was manufactured.',
		},
		serialNumber: {
			type: GraphQLString,
			description:
				'The serial number assigned by the organization when the device was manufactured.',
		},
		deviceName: {
			type: new GraphQLList(require('./devicedevicename.schema.js')),
			description:
				"This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.",
		},
		_modelNumber: {
			type: require('./element.schema.js'),
			description: 'The model number for the device.',
		},
		modelNumber: {
			type: GraphQLString,
			description: 'The model number for the device.',
		},
		_partNumber: {
			type: require('./element.schema.js'),
			description: 'The part number of the device.',
		},
		partNumber: {
			type: GraphQLString,
			description: 'The part number of the device.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'The kind or type of device.',
		},
		specialization: {
			type: new GraphQLList(require('./devicespecialization.schema.js')),
			description:
				'The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.',
		},
		version: {
			type: new GraphQLList(require('./deviceversion.schema.js')),
			description:
				'The actual design of the device or software version running on the device.',
		},
		property: {
			type: new GraphQLList(require('./deviceproperty.schema.js')),
			description:
				'The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.',
		},
		patient: {
			type: new GraphQLUnionType({
				name: 'Devicepatient_patient_Union',
				description:
					'Patient information, If the device is affixed to a person.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description: 'Patient information, If the device is affixed to a person.',
		},
		owner: {
			type: new GraphQLUnionType({
				name: 'Deviceowner_owner_Union',
				description:
					'An organization that is responsible for the provision and ongoing maintenance of the device.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'An organization that is responsible for the provision and ongoing maintenance of the device.',
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema.js')),
			description:
				'Contact details for an organization or a particular human that is responsible for the device.',
		},
		location: {
			type: new GraphQLUnionType({
				name: 'Devicelocation_location_Union',
				description: 'The place where the device can be found.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'The place where the device can be found.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'A network address on which the device may be contacted directly.',
		},
		url: {
			type: UriScalar,
			description:
				'A network address on which the device may be contacted directly.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Descriptive information, usage information or implantation information that is not captured in an existing element.',
		},
		safety: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Provides additional safety characteristics about a medical device.  For example devices containing latex.',
		},
		parent: {
			type: new GraphQLUnionType({
				name: 'Deviceparent_parent_Union',
				description: 'The parent device.',
				types: () => [require('./device.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description: 'The parent device.',
		},
	}),
});
