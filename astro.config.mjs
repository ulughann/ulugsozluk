import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidianTheme from 'starlight-theme-obsidian';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
    site: "https://ulughann.github.io",
    base: "/ulugsozluk",
    integrations: [
        starlight({
            title: 'Uluğ Sözlük',
            locales: {
                en: {
                    label: 'English',
                    lang: "en"
                },
                root: {
                    label: 'Türkçe',
                    lang: "tr"
                }
            },
            social: {
                github: 'https://github.com/ulughann/ulugsozluk'
            },
            editLink: {
                baseUrl: 'https://github.com/ulughann/ulugsozluk/edit/main/docs/',
            },
            customCss: [
                './src/styles/global.css'
            ],
            plugins: [
                starlightLinksValidator({
                    errorOnInvalidHashes: false
                }),
                starlightObsidianTheme(),
            ],
            favicon: './favicon.png',
            sidebar: [
                {
                    label: 'Başlangıç',
                    items: [
                        { label: 'Destek', link: '/destek/' },
                        { label: 'Kaynakça', link: '/kaynakça/' },
                    ],
                },
                {
                    label: 'Sözlükler',
                    items: [
                        { label: 'Ortak Türkçe Sözlük', link: '/' },
                        { label: 'Ön-Türkçe Sözlük', link: 'https://tonga.onrir.dev/', badge: 'dışcıl' },
                    ],
                },
                {
                    label: 'Dil Bilgisi',
                    autogenerate: { directory: 'grammar' },
                },
                {
                    label: "Yazılı Yapıtlar",
                    autogenerate: { directory: 'yazılı' },

                }

            ],
            components: {
                Head: './src/overrides/Head.astro',
            },
        }),
    ],
    devToolbar: { enabled: false },
});
