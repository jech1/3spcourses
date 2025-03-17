"use client";

import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TermsAndConditions() {
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <Head>
        <title>Terms and Conditions | 3SP Course Platform</title>
        <meta name="description" content="Please read our terms and conditions carefully before using the services of 3SP Course Platform. This page outlines the rules for using our website, intellectual property, restrictions, and more." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Terms and Conditions | 3SP Course Platform" />
        <meta property="og:description" content="Please read our terms and conditions carefully before using the services of 3SP Course Platform. This page outlines the rules for using our website, intellectual property, restrictions, and more." />
        <meta property="og:url" content="https://yourwebsite.com/terms-and-conditions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms and Conditions | 3SP Course Platform" />
        <meta name="twitter:description" content="Please read our terms and conditions carefully before using the services of 3SP Course Platform. This page outlines the rules for using our website, intellectual property, restrictions, and more." />
      </Head>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#632a88] to-white text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 mb-12">
              Please read our terms and conditions carefully before using our
              services.
            </p>

            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
              <div className="h-96 overflow-y-auto pr-4">
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to 3SP Course Platform. These terms and conditions
                  outline the rules and regulations for the use of our website
                  and services.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  2. Intellectual Property Rights
                </h2>
                <p className="mb-4">
                  Other than the content you own, under these terms, 3SP Course
                  Platform and/or its licensors own all the intellectual
                  property rights and materials contained in this website.
                </p>

                <h2 className="text-2xl font-bold mb-4">3. Restrictions</h2>
                <p className="mb-4">
                  You are specifically restricted from all of the following:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Publishing any website material in any other media</li>
                  <li>
                    Selling, sublicensing and/or otherwise commercializing any
                    website material
                  </li>
                  <li>
                    Publicly performing and/or showing any website material
                    without proper attribution
                  </li>
                  <li>
                    Using this website in any way that is or may be damaging to
                    this website
                  </li>
                  <li>
                    Using this website in any way that impacts user access to
                    this website
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">4. Your Content</h2>
                <p className="mb-4">
                  In these terms and conditions, &quot;Your Content&quot; shall
                  mean any audio, video text, images or other material you
                  choose to display on this website. By displaying Your Content,
                  you grant 3SP Course Platform a non-exclusive, worldwide
                  irrevocable, sub licensable license to use, reproduce, adapt,
                  publish, translate and distribute it in any and all media.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. No Warranties</h2>
                <p className="mb-4">
                  This website is provided &quot;as is,&quot; with all faults,
                  and 3SP Course Platform express no representations or
                  warranties, of any kind related to this website or the
                  materials contained on this website.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="mb-4">
                  In no event shall 3SP Course Platform, nor any of its
                  officers, directors and employees, be held liable for anything
                  arising out of or in any way connected with your use of this
                  website.
                </p>

                <h2 className="text-2xl font-bold mb-4">7. Indemnification</h2>
                <p className="mb-4">
                  You hereby indemnify to the fullest extent 3SP Course Platform
                  from and against any and/or all liabilities, costs, demands,
                  causes of action, damages and expenses arising in any way
                  related to your breach of any of the provisions of these
                  terms.
                </p>

                <h2 className="text-2xl font-bold mb-4">8. Severability</h2>
                <p className="mb-4">
                  If any provision of these terms is found to be invalid under
                  any applicable law, such provisions shall be deleted without
                  affecting the remaining provisions herein.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  9. Variation of Terms
                </h2>
                <p className="mb-4">
                  3SP Course Platform is permitted to revise these terms at any
                  time as it sees fit, and by using this website you are
                  expected to review these terms on a regular basis.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  10. Entire Agreement
                </h2>
                <p className="mb-4">
                  These terms constitute the entire agreement between 3SP Course
                  Platform and you in relation to your use of this website, and
                  supersede all prior agreements and understandings.
                </p>

                <h2 className="text-2xl font-bold mb-4">
                  11. Governing Law & Jurisdiction
                </h2>
                <p className="mb-4">
                  These terms will be governed by and interpreted in accordance
                  with the laws of the country/state where 3SP Course Platform
                  is based, and you submit to the non-exclusive jurisdiction of
                  the state and federal courts located in said country/state for
                  the resolution of any disputes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
