import Head from 'next/head'
import Script from 'next/script'

function IndexPage() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel='stylesheet' href='https://cdn.envybox.io/widget/cbk.css' />
                <Script type='text/javascript'
                        src='https://cdn.envybox.io/widget/cbk.js?wcb_code=730acf1799c871b0c2610a6ea3716681'
                        charSet='UTF-8' async />
            </Head>
        </div>
    )
}

export default IndexPage