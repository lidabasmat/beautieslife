import { graphql, useStaticQuery } from 'gatsby';
import * as React from "react";
import { GatsbyImage as Image, getImage } from 'gatsby-plugin-image';
import IconCircleSource from '../images/circle.svg';
import IconLineRightSource from '../images/line-right.svg';

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 540
          )
        }
      }
      pic1Image: file(relativePath: {eq: "pic1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 80
          )
        }
      }
      pic2Image: file(relativePath: {eq: "pic2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 80
          )
        }
      }
      pic3Image: file(relativePath: {eq: "pic3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 80
          )
        }
      }
      pic4Image: file(relativePath: {eq: "pic4.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 80
          )
        }
      }
      logo1Image: file(relativePath: {eq: "logo1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 76
          )
        }
      }
      logo2Image: file(relativePath: {eq: "logo2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 77
          )
        }
      }
      logo3Image: file(relativePath: {eq: "logo3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 76
          )
        }
      }
      logo4Image: file(relativePath: {eq: "logo4.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 76
          )
        }
      }
      logo5Image: file(relativePath: {eq: "logo5.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 76
          )
        }
      }
      logo6Image: file(relativePath: {eq: "logo6.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 76
          )
        }
      }
      logo7Image: file(relativePath: {eq: "logo7.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 76
          )
        }
      }
      logo8Image: file(relativePath: {eq: "logo8.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 77
          )
        }
      }
      girl1Image: file(relativePath: {eq: "girl1.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 320
          )
        }
      }
      girl2Image: file(relativePath: {eq: "girl2.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 320
          )
        }
      }
      girl3Image: file(relativePath: {eq: "girl3.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 320
          )
        }
      }
      girl4Image: file(relativePath: {eq: "girl4.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 320
          )
        }
      }
      girl5Image: file(relativePath: {eq: "girl5.png"}) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            height: 180
          )
        }
      }
    }
  `);

  return (
    <>
      <div className="bg-red-100 pt-16 pb-12 md:pb-28">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full lg:col-6">
              <h1 className="typo-h1 text-gray-300">
                Pasti berat kalo lari sendirian
                <span className="text-red-300">.</span>
              </h1>
              <p className="typo-body text-gray-400 mt-8 max-w-md">
                Setiap hal pasti butuh hal lain untuk membersamai. Begitupun dengan bisnis, Beautieslfie.id hadir untuk membersamai
                kalian untuk menjadi
                {' '}
                <span className="decoration-2 underline font-bold">
                  Beautypreneur.
                </span>
                {' '}
                Siapapun kamu!!
              </p>
              <div className="flex items-center mt-10">
                <div className="flex items-center">
                  <div className="bg-red-300 border-4 border-red-100 h-5 w-5 rounded-full">
                  </div>
                  <img src={IconCircleSource} className="" alt="circle icon" />
                  <h6 className="typo-h6 ml-2 text-gray-400">Mahasiswi</h6>
                </div>
                <div className="flex items-center ml-8">
                  <img src={IconCircleSource} className="" alt="circle icon" />
                  <h6 className="typo-h6 ml-2 text-gray-400">Ibu Rumah Tangga</h6>
                </div>
                <div className="flex items-center ml-8">
                  <img src={IconCircleSource} className="" alt="circle icon" />
                  <h6 className="typo-h6 ml-2 text-gray-400">Career Hunter</h6>
                </div>
              </div>
              <button className="bg-red-300 rounded-xl py-3.5 px-5 text-sm text-white font-bold mt-10">
                <span className="block typo-blockquote text-left">1st Indonesian Beautypreneur Community</span>
                <span className="block typo-small text-left mt-1.5 italic">Dengan berbagai fasilitas “advance disigital platform”.</span>
              </button>
            </div>
            <div className="col-full lg:col-6 mt-10 md:mt-0">
              <Image
                image={getImage(data.heroImage)}
                className="hidden lg:flex"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 pt-44">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full lg:col-4">
              <h2 className="typo-h2 text-gray-300">
                Beautypreneur
                <span className="text-red-300 ml-0.5">.</span>
              </h2>
              <p className="typo-body text-gray-300 mt-6">ˈbyo͞odē prəˈnər (noun)</p>
              <p className="typo-body text-gray-300 mt-6">Bukan sekedar bisnis yang hits dengan segudang untung. Tren
              {' '}
              <span className="decoration-2 underline font-bold">beautypreneur</span>
              {' '}
              di Indonesia sudah mulai terlihat sejak beberapa tahun terakhir, industri kecantikan dalam negeri maulai berkembang pesat.
              </p>
              <div className="mt-6 w-24 h-3 rounded-full bg-red-300"></div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-10 md:mt-24 lg:mt-0">
              <div className="border-8 shadow-2xl bg-red-400 text-white px-8 pt-6 pb-4 rounded-2xl">
                <p className="typo-display">50%</p>
                <p className="typo-small mt-4">
                  Bingun bagaimana caranya memulai bisnis
                  {' '}
                  <span className="italic">healthy beauty.</span>
                  {' '}
                  Sedangkan demand di sektor ini begitu melimpah.
                </p>
                <p className="typo-small opacity-40 mt-2.5">
                  source involve.cewekbanget.id/beautypreneur
                </p>
              </div>
            </div>
            <div className="col-full md:col-6 lg:col-4 mt-10 md:mt-24 lg:mt-0">
              <div className="border-8 shadow-2xl bg-red-400 text-white px-8 pt-6 pb-4 rounded-2xl">
                <p className="typo-display">23,7%</p>
                <p className="typo-small mt-4">
                  Khawatir butuh modal usaha yang sangat besar. Padahal banyak cara agar dapat berbinis di sektor ini (Healthy Beauty)
                </p>
                <p className="typo-small opacity-40 mt-2.5">
                  source involve.cewekbanget.id/beautypreneur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="text-center">
            <h2 className="typo-h1 text-gray-300">
              Beauty Selling <span className="text-red-300">with</span> Digital Pattern
              <span className="text-red-300">.</span>
            </h2>
            <p className="typo-body mt-10 text-gray-400">
              Pasar yang besar ditunjang dengan wadah yang tepat, insyaAllah akan bebuah keberhasilan
            </p>
          </div>
          <div className="row items-center mt-14 md:mt-28">
            <div className="col-full lg:col-6">
              <div className="row">
                <div className="col-6">
                  <div className="bg-white shadow-2xl p-8 rounded-2xl">
                    <Image
                      image={getImage(data.pic1Image)}
                    />
                    <p className="typo-small text-gray-400 mt-6">
                      Beautieslife.id Platform
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-0 md:-mt-12">
                  <div className="bg-white shadow-2xl p-8 rounded-2xl">
                    <Image
                      image={getImage(data.pic2Image)}
                    />
                    <p className="typo-small text-gray-400 mt-6">
                      Management Tools
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-12">
                  <div className="bg-white shadow-2xl p-8 rounded-2xl">
                    <Image
                      image={getImage(data.pic3Image)}
                    />
                    <p className="typo-small text-gray-400 mt-6">
                      Social Media Platform
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-12 md:mt-0">
                  <div className="bg-white shadow-2xl p-8 rounded-2xl">
                    <Image
                      image={getImage(data.pic4Image)}
                    />
                    <p className="typo-small text-gray-400 mt-6">
                      Enhance Chat Tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-full lg:ml-1/12 lg:col-5 mt-16 md:mt-24 md:mt-0">
              <div className="mt-6 w-24 h-3 rounded-full bg-red-300"></div>
              <h2 className="typo-h2 mt-8 text-gray-300">
                Bukan saatnya menunda
                {' '}
                <span className="text-red-300">digitalisasi</span>
                .
              </h2>
              <p className="typo-body text-gray-400 mt-14">
                Ayo kita hadapi bersama era peralihan ini.
                {' '}
                <span className="font-bold">Beautieslife.id</span>
                {' '}
                akan bantu kamu belajar berbisnis dengan berbagai tools digital yang diharapkan akan mendorong kemudahan dan kelancaran bisnis beauty kamu.
              </p>
              <div className="flex mt-14">
                <img src={IconCircleSource} className="" alt="logo icon" />
                <p className="typo-intro text-gray-400 ml-2.5">
                  Udah bukan jamannya gaptek
                </p>
              </div>
              <div className="flex mt-5">
                <img src={IconCircleSource} className="" alt="logo icon" />
                <p className="typo-intro text-gray-400 ml-2.5">
                  Udah gak ada lagi bingung pake tools apaan
                </p>
              </div>
              <div className="flex mt-5">
                <img src={IconCircleSource} className="" alt="logo icon" />
                <p className="typo-intro text-gray-400 ml-2.5">
                  Gak ada lagi istilah siapa yang bakan ngajarin aku
                </p>
              </div>
              <div className="flex mt-5">
                <img src={IconCircleSource} className="" alt="logo icon" />
                <p className="typo-intro text-gray-400 ml-2.5">
                  Udah bukan musimnya jalan sendirian!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="mt-6 w-24 h-3 rounded-full bg-red-300"></div>
          <h2 className="typo-h2 mt-8 max-w-2xl">
            Pokonya udah pasti kita bimbing, dengan
            {' '}
            <span className="text-red-300">berbagai fasilitas</span>
            .
          </h2>
          <div className="row">
            <div className="col-6 lg:col-3 mt-20">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo1Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Intens Mentoring
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-20">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo2Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Kajian Rutin
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-20">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo3Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Rewards
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-20">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo4Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Free Web Profile
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-12">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo5Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Kelas Bisnis
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-12">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo6Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Kelas Digital
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-12">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo7Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Kelas Skin Care
                </h4>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-12">
              <div className="bg-white rounded-2xl shadow-2xl py-8">
                <div className="text-center">
                  <Image
                    image={getImage(data.logo8Image)}
                  />
                </div>
                <h4 className="typo-h4 mt-5 text-gray-400 text-center">
                  Product Knowledge
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="text-center">
            <h2 className="typo-h2 text-gray-300">
              Meet our
              {' '}
              <span className="text-red-300">mentor</span>
              {' '}
              and
              {' '}
              <span className="text-red-300 mr-0.5">advisor</span>
              .
            </h2>
            <p className="typo-body mt-4 text-gray-300">
              Kita akan berlari ditemani para mentor dan advisor dari Beautieslife.id. Akan banyak ilmu baru dan inspiratif.
            </p>
          </div>
          <div className="row">
            <div className="col-6 lg:col-3 mt-20">
              <Image
                image={getImage(data.girl1Image)}
              />
              <p className="typo-blockquote text-gray-300 mt-6">
                Chantal Shelburne
              </p>
              <p className="typo-small mt-1 text-red-300">
                Founder Beautieslife.id
              </p>
              <p className="typo-small mt-1 text-gray-400">
                Our Mentor
              </p>
            </div>
            <div className="col-6 lg:col-3 mt-20">
              <Image
                image={getImage(data.girl2Image)}
              />
              <p className="typo-blockquote text-gray-300 mt-6">
                Kylee Danford
              </p>
              <p className="typo-small mt-1 text-red-300">
                Founder & CDO Syabany.com
              </p>
              <p className="typo-small mt-1 text-gray-400">
                Our Mentor
              </p>
            </div>
            <div className="col-6 lg:col-3 mt-20">
              <Image
                image={getImage(data.girl3Image)}
              />
              <p className="typo-blockquote text-gray-300 mt-6">
                Lauralee Quintero
              </p>
              <p className="typo-small mt-1 text-red-300">
                Leader Nasional JAFRA Executive
              </p>
              <p className="typo-small mt-1 text-gray-400">
                Our Advisor
              </p>
            </div>
            <div className="col-6 lg:col-3 mt-20">
              <Image
                image={getImage(data.girl4Image)}
              />
              <p className="typo-blockquote text-gray-300 mt-6">
                Freida Varnes
              </p>
              <p className="typo-small mt-1 text-red-300">
                Founder Dakwahyu & Wadah Hikmah
              </p>
              <p className="typo-small mt-1 text-gray-400">
                Our Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 md:mt-44">
        <div className="container-lg">
          <div className="row justify-end">
            <div className="col-full lg:col-6">
              <p className="typo-blockquote text-red-300">
                Testimonial
              </p>
              <h2 className="typo-h2 mt-1">
                Apa kata
                {' '}
                <span className="text-red-300">mereka</span>
                ?
              </h2>
              <div className="row">
                <div className="col-4 mt-10">
                  <Image
                    image={getImage(data.girl5Image)}
                  />
                </div>
                <div className="col-8 mt-10">
                  <p className="typo-blockquote text-gray-300">
                    Annabel Rohan
                  </p>
                  <p className="typo-small text-red-300 mt-1">
                    Leader Nasional JAFRA Executive
                  </p>
                  <p className="hidden md:flex typo-body text-gray-400 mt-4">
                    Arcu sed etiam proin natoque at lectus aliquam. Faucibus ipsum porta eleifend facilisis cras in. Sed
                    etiam proin natoque at lectus aliquam. Faucibus ipsum porta eleifend facilisis cras in.
                  </p>
                  <a href="#" className="hidden md:flex items-center mt-4">
                    <p className="typo-small text-gray-400">next</p>
                    <img src={IconLineRightSource} className="ml-2" alt="line-right icon" />
                  </a>
                </div>
                <p className="flex md:hidden typo-body text-gray-400 mt-4 px-4">
                  Arcu sed etiam proin natoque at lectus aliquam. Faucibus ipsum porta eleifend facilisis cras in. Sed
                  etiam proin natoque at lectus aliquam. Faucibus ipsum porta eleifend facilisis cras in.
                </p>
                <a href="#" className="flex md:hidden items-center mt-4 px-4">
                  <p className="typo-small text-gray-400">next</p>
                  <img src={IconLineRightSource} className="ml-2" alt="line-right icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
