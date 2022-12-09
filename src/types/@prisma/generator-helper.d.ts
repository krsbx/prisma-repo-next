import { GeneratorOptions, GeneratorConfig } from '@prisma/generator-helper';

declare module '@prisma/generator-helper' {
  type CustomGeneratorOptions = GeneratorOptions & {
    generator: GeneratorConfig & {
      config: GeneratorConfig['config'] & {
        query?: string;
        warn?: string;
        info?: string;
        error?: string;
      };
    };
  };
}
