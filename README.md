# React Router Assignment

## Step 1

Fork and clone this repository. Once the code is on your machine run

```bash
npm install
```

## Step 2

you'll want to install react router dom

```bash
npm install react-router-dom
```

import the `<BrowserRouter/>` component into the `index.js` file, and wrap the `<App/>` component with it

Inside of `App.js` we will want to replace the content within the `<main/>` with a `<Routes/>` component.

## Step 3

Create a folder for your components and create a `Home.js` component. This component should render a `<div/>` with an `<h1/>` tag with the text "CarZone: We got parts for your car!"

## Step 4

Let's add a nav bar to our application. In the `<header/>` of `App.js` add a `<nav/>` tag after the `<h1/>` tag. Inside of the `<nav/>` tag add a `<Link/>` component that will link to the home page. The text of the link should say "Home".

## Step 5

Next we are going to create an inventory page. So create a `Inventory.js` component. This component should render a `<div/>` with an `<h1/>` tag with the text "Inventory".

Add the `<Inventory/>` component to the `<Routes/>` component in `App.js`. The path should be "/inventory".

Add a `<Link/>` component to the `<nav/>` in `App.js` that will link to the inventory page. The text of the link should say "Inventory".

## Step 6

Next we are going to create a `ProductPreview.js` component. This component should render a `<div/>`. This component should import the `inventory.json` file and map over the array of products. For each product in the array render a `<div/>` with the following information: name, and price.

Inside of the `<Inventory/>` component we are going to add a subrouter. This subrouter will render the `<ProductPreview/>` component. The path should be `"/"``.

## Step 7

Next we are going to create a `ProductDetail.js` component. This component should render a `<div/>`. This component should grab the product id from the `useParams` hook. Use the id to match the product in the `inventory.json` list. This component should render the following information: name, price, and the description. If the stock is 0 then render "Out of Stock" otherwise render the stock.

Inside of the `<ProductPreview/>` component we are going to add a subroute. This subroute will render the `<ProductDetail/>` component. The path should be `"/:id"`. The `:id` is a url parameter. This will allow us to access the id of the product that we want to render.

## Step 8

Update the `<ProductPreview/>` component to render a `<Link/>` component for each product. The text of the link should be the name of the product. The link should link to the product detail page.

