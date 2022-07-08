  <p align="center">
    <a href="https://www.objectpress.io">
      <img src="https://share.objectpress.io/logo-circle.png" alt="logo" width="145" height="145">
    </a> 
  </p>

  <br />

  <p align="center">
    An awesome way to jumpstart your way into the Jamstack!
  </p>

  <br />

  <p align="center">
    <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/ObjectPress/object-press-minimal">
      <img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">
    </a>
  </p>

  <br />

  <h2 align="center">Object Press is a FREE headless content management system.</h1>

  <br />

  <p align="center">
    <a href="https://www.objectpress.io">
      <img src="https://share.objectpress.io/dashboard.png" alt="screenshot" width="auto" height="auto">
    </a>
  </p>

## Main Features

- 99.99% UP time for all content.
- Content is delivered via serverless and scalable endpoints to handle various levels of traffic appropriately.
- You can add content using markdown, create unique fields for your app, and upload your images to our servers for free.

## Getting Started

1. Sign up at [objectpress.io](https://www.objectpress.io)
2. Create your content
3. Update the APP_SECRET and USER_SECRET in your gatsby-config.js file to deploy

```js
// loads the source-plugin and adds credentials
    {
      resolve: `gatsby-plugin-objectpress`,
      options: {
        appSecret: `APP_SECRET`,
        userSecret: `USER_SECRET`,
      },
    },
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. <u>If you're interested in the project, please reach out.</u> Any contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the ISC License.

## Contact

Email - vincent@objectpress.io

GitHub - [github.com/ObjectPress](https://github.com/ObjectPress)
