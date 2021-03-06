const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary ImplementationGuide Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImplementationGuide_Input',
	description: 'Base StructureDefinition for ImplementationGuide Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ImplementationGuide_Enum_input',
					values: { ImplementationGuide: { value: 'ImplementationGuide' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URL that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URL that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the Implementation Guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Implementation Guide author manually.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the Implementation Guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Implementation Guide author manually.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A free text natural language name identifying the Implementation Guide.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A free text natural language name identifying the Implementation Guide.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the Implementation Guide.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the Implementation Guide.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'This Implementation Guide was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'This Implementation Guide was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the implementation guide.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the implementation guide.',
		},
		contact: {
			type: new GraphQLList(require('./implementationguidecontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'A free text natural language description of the Implementation Guide and its use.',
		},
		description: {
			type: GraphQLString,
			description:
				'A free text natural language description of the Implementation Guide and its use.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of implementation guides. The most common use of this element is to represent the country / jurisdiction for which this implementation guide was defined.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.',
		},
		_fhirVersion: {
			type: require('./element.input.js'),
			description:
				'The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.',
		},
		fhirVersion: {
			type: IdScalar,
			description:
				'The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.',
		},
		dependency: {
			type: new GraphQLList(
				require('./implementationguidedependency.input.js'),
			),
			description:
				'Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.',
		},
		package: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./implementationguidepackage.input.js')),
			),
			description:
				'A logical group of resources. Logical groups can be used when building pages.',
		},
		global: {
			type: new GraphQLList(require('./implementationguideglobal.input.js')),
			description:
				'A set of profiles that all resources covered by this implementation guide must conform to.',
		},
		_binary: {
			type: require('./element.input.js'),
			description:
				'A binary file that is included in the  implementation guide when it is published.',
		},
		binary: {
			type: new GraphQLList(UriScalar),
			description:
				'A binary file that is included in the  implementation guide when it is published.',
		},
		page: {
			type: new GraphQLNonNull(require('./implementationguidepage.input.js')),
			description:
				'A page / section in the implementation guide. The root page is the implementation guide home page.',
		},
	}),
});
