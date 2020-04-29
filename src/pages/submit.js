import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Kampanya gönder" />

    <p className="mb-10">
      <Link
        to="/"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        &larr; Tüm kampanyaları gör
      </Link>
    </p>
    <h1 className="text-xl font-bold mb-4">Hi there!</h1>
    <p>
      Sitede yayınlanmak üzere kampanya göndermek için aşağıdaki formu kullanabilirsin. Gözden geçirdikten sonra siteye ekleyeceğiz.
    </p>
    <iframe
      className="mt-10"
      src="https://docs.google.com/forms/d/e/1FAIpQLSd2wiilTt5esK-6qIE_vxfHHpCy2YoMi01IzfJJqnwcHU_73g/viewform?embedded=true"
      width="100%"
      height="1000"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
    <Link to="/">Ana sayfaya dön</Link>
  </Layout>
)

export default SecondPage
