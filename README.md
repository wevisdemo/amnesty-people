# amnesty-people

## Environment

Build with GitHub Actions and deploy with Cloudflare Pages

| Name       | URL                                      | import.meta.env.PUBLIC_BUILD_TARGET |
| ---------- | ---------------------------------------- | ----------------------------------- |
| Production | https://amnestypeople.com                | production                          |
| Staging    | https://staging.amnesty-people.pages.dev | staging                             |

## Stack

- [Astro](https://docs.astro.build)
  - [Svelte](https://svelte.dev/docs/introduction) adapter
  - You can add more adapters for your favorite framework: [read more](https://docs.astro.build/en/core-concepts/framework-components/)
- [TailwindCSS](https://tailwindcss.com/docs) and [DaisyUI](https://daisyui.com/components/)
- [Firebase](https://console.firebase.google.com) Firestore Database as a backend

## Set up

The project required the following env:

```env
PUBLIC_FIREBASE_CONFIG=<firebase_config_in_json_format>
PUBLIC_FIREBASE_ADMIN=<admin_email>,<admin_password>
PUBLIC_BUILD_TARGET=<production | <empty>>
PUBLIC_DATA_URL=<url_to_data_directory>
```

## Shared resources

- [Typography and colors](https://github.com/wevisdemo/conforall/issues/9)
- [Section container](https://github.com/wevisdemo/conforall/issues/10)
