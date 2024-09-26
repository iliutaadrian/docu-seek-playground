import Link from "next/link";
import { Button } from "../ui/button";

export const FeaturedOn = () => {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8">
          Featured on
        </h2>
        <div className="flex gap-5 flex-wrap justify-center">
          <Link
            href="#"
            className="flex justify-center items-center gap-2 bg-primary/10 p-2 group w-52 rounded-md hover:bg-primary/20"
          >
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#DA552F"
                  fill-rule="evenodd"
                  d="M13.59975,8.4 L13.59975,8.4 L10.2,8.4 L10.2,12 L13.59975,12 C14.59425,12 15.39975,11.19375 15.39975,10.2 C15.39975,9.20625 14.59425,8.4 13.59975,8.4 M13.59975,14.4 L13.59975,14.4 L10.2,14.4 L10.2,18 L7.8,18 L7.8,6 L13.59975,6 C15.9195,6 17.79975,7.88025 17.79975,10.2 C17.79975,12.51975 15.9195,14.4 13.59975,14.4 M12,0 C5.37225,0 0,5.37225 0,12 C0,18.62775 5.37225,24 12,24 C18.627,24 24,18.62775 24,12 C24,5.37225 18.627,0 12,0"
                ></path>{" "}
              </g>
            </svg>
            <span className="group-hover:text-primary">Product Hunt</span>
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center gap-2 bg-primary/10 p-2 group w-52 rounded-md hover:bg-primary/20"
          >
            <svg
              className="h-10 w-10"
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m0 0h24v24h-24zm12.8 13.446 4.339-8.303h-1.871q-2.143 4.018-2.839 5.786l-.375.96-.32-.75c-.96-2.374-1.931-4.348-3.022-6.243l.129.243h-1.984l4.286 8.2v5.52h1.657z"></path>
              </g>
            </svg>
            <span className="group-hover:text-primary">Hacker News</span>
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center gap-2 bg-primary/10 p-2 group w-52 rounded-md hover:bg-primary/20"
          >
            <svg
              className="h-10 w-10"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 33.88 33.88"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123 c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828 c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815 c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495 c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949 c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844 c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="group-hover:text-primary">Twitter</span>
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center gap-2 bg-primary/10 p-2 group w-52 rounded-md hover:bg-primary/20"
          >
            <svg
              className="h-10 w-10"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <circle fill="#FF4500" cx="128" cy="128" r="128">
                    {" "}
                  </circle>{" "}
                  <path
                    d="M213.149867,129.220267 C213.149867,118.843733 204.758756,110.603378 194.532978,110.603378 C189.498311,110.603378 184.918756,112.585956 181.562311,115.791644 C168.745244,106.635378 151.195022,100.6848 131.662222,99.9224889 L140.206933,59.9409778 L167.980089,65.8915556 C168.287289,72.9116444 174.084267,78.5578667 181.257956,78.5578667 C188.5824,78.5578667 194.532978,72.6072889 194.532978,65.28 C194.532978,57.9555556 188.5824,52.0049778 181.257956,52.0049778 C176.069689,52.0049778 171.490133,55.0570667 169.353956,59.4830222 L138.377956,52.9208889 C137.462044,52.7672889 136.546133,52.9208889 135.934578,53.3788444 C135.172267,53.8368 134.714311,54.5991111 134.563556,55.5150222 L125.100089,100.073244 C105.262933,100.6848 87.4083556,106.635378 74.4376889,115.945244 C71.0812444,112.739556 66.5016889,110.756978 61.4670222,110.756978 C51.0904889,110.756978 42.8501333,119.148089 42.8501333,129.373867 C42.8501333,137.002667 47.4268444,143.4112 53.8382222,146.312533 C53.5310222,148.141511 53.3802667,149.973333 53.3802667,151.958756 C53.3802667,180.644978 86.7996444,203.995022 128.001422,203.995022 C169.2032,203.995022 202.622578,180.798578 202.622578,151.958756 C202.622578,150.126933 202.468978,148.141511 202.164622,146.312533 C208.573156,143.4112 213.149867,136.849067 213.149867,129.220267 Z M85.2721778,142.495289 C85.2721778,135.170844 91.2227556,129.220267 98.5500444,129.220267 C105.874489,129.220267 111.825067,135.170844 111.825067,142.495289 C111.825067,149.819733 105.874489,155.773156 98.5500444,155.773156 C91.2227556,155.923911 85.2721778,149.819733 85.2721778,142.495289 Z M159.588978,177.746489 C150.432711,186.902756 133.036089,187.514311 128.001422,187.514311 C122.813156,187.514311 105.416533,186.749156 96.4110222,177.746489 C95.04,176.372622 95.04,174.236444 96.4110222,172.862578 C97.7848889,171.491556 99.9210667,171.491556 101.294933,172.862578 C107.094756,178.6624 119.303111,180.644978 128.001422,180.644978 C136.699733,180.644978 149.058844,178.6624 154.705067,172.862578 C156.078933,171.491556 158.215111,171.491556 159.588978,172.862578 C160.809244,174.236444 160.809244,176.372622 159.588978,177.746489 Z M157.1456,155.923911 C149.821156,155.923911 143.870578,149.973333 143.870578,142.648889 C143.870578,135.324444 149.821156,129.373867 157.1456,129.373867 C164.472889,129.373867 170.423467,135.324444 170.423467,142.648889 C170.423467,149.819733 164.472889,155.923911 157.1456,155.923911 Z"
                    fill="#FFFFFF"
                    fill-rule="nonzero"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="group-hover:text-primary">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
