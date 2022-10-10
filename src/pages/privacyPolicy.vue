<script setup>
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';

</script>

<template>
  <div class="relative h-screen">
    <Header />
    <main class="main min-h-minHeight relative px-3 pt-20 lg:pt-0 lg:min-h-minHeight__lg">
      <div class="container mx-auto lg:max-w-6xl">
        <div class="pt-7 lg:pt-24">
          <div class="max-w-2xl mx-auto bg-white/80 rounded-lg py-10 px-6">
            <h1>免責事項・プライバシーポリシー</h1>
            <hr class="mb-8">
            <p>
              当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。<br>
              ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
            </p>
            <h2>免責事項</h2>
            <p>
              当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。<br>
              また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。<br>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
            <h2>プライバシーポリシー</h2>
            <h3>個人情報の利用目的</h3>
            <p>
              当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。<br>
              取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
            </p>
            <h3>アクセス解析ツールについて</h3>
            <p>
              当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br>
              このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。<br>
              トラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <h3>著作権について</h3>
            <p>
              当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。<br>
              当ブログは著作権や肖像権の侵害を目的としたものではありません。<br>
              著作権や肖像権に関して問題がございましたら、Twitterのダイレクトメッセージまでご連絡ください。迅速に対応いたします。
            </p>
          </div>
        </div>
      </div>
      <!-- / container -->
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main::before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-image: url(@/assets/images/bg/bg_nightSky.jpg);
  background-size: cover;
}

h1 {
  text-align: center;
  position: relative;
  font-size: clamp(18px, 3vw, 24px);
  padding-bottom: 12px;
}

h2 {
  font-size: 16px;
  font-weight: bold;
  color: #001E54;
}

h3 {
  font-weight: bold;
  position: relative;
}

h3::before {
  content: '■';
  font-size: 20px;
}

p {
  margin-bottom: 16px;
}
</style>