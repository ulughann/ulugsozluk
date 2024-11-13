import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { defineCollection } from 'astro:content';
import { pageThemeObsidianSchema } from 'starlight-theme-obsidian/schema';

export const collections = {
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
	docs: defineCollection({
		schema: docsSchema({
			extend: pageThemeObsidianSchema,
		}),
	}),

};
