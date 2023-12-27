import { SCALA_DESCRIPTION_PRESET, ScalaGenerator } from '../../src';

const generator = new ScalaGenerator({
  presets: [SCALA_DESCRIPTION_PRESET]
});
const jsonSchemaDraft7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  additionalProperties: false,
  description: 'Description for class',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      description: 'Description for the email property'
    }
  }
};

export async function generate(): Promise<void> {
  const models = await generator.generate(jsonSchemaDraft7);
  for (const model of models) {
    console.log(model.result);
  }
}
if (require.main === module) {
  generate();
}
