import type { NextPage } from "next";
import Nav from "../components/Nav"


const Componentes: NextPage = () => {
  return (
    <>
    <Nav></Nav>
    <h1 className="flex justify-center mb-8">Cards</h1>
    <div className="grid grid-cols-2 gap-4">

    <div className="flex font-sans p-5 gap-7">

                    <div className="max-w-80 p-7 mb-4 rounded-3xl shadow-lg">
                        <div className="flex gap-9">
                            <h2 className="font-bold text-center text-[#606060] text-sm">heading xlarge / h5</h2>
                        </div>

                        <p className="text-center pt-8 text-xs text-[#606060] ">Lorem ipsum dolor sit amet consectetur adipiscing, elit ultricies eleifend proin pulvinar, facilisi risus montes cubilia fringilla. Suscipit vivamus viverra nec vulputate venenatis libero fermentum auctor, facilisi scelerisque hac vel augue consequat nunc vehicula, malesuada taciti placerat sed nam ut ligula. Nisl porta elementum nibh lacinia malesuada urna, odio maecenas dictum vitae dictumst felis, viverra aptent netus duis mauris.</p>

                    </div>
                    <div>
                        <p className="text-sm font-normal">Padding: p-7</p>
                        <p className="text-sm font-normal">rounded: rounded-3xl</p>
                        <p className="text-sm font-normal">Box shadow: shadow-lg</p>
                        <p className="text-sm font-normal">gap(flex-grid) gap-4</p>
                    </div>

    </div>


    <div>

            <div className="flex gap-8 mt-7">
            <button className="mt-24 px-5 py-2 bg-[#1D70B6] rounded-full  font-bold text-white text-xs hover:bg-[#263261] ">Ejemplo de botón</button>
            <div>
                        <p className="text-sm font-normal">Padding: px-5, py-2</p>
                        <p className="text-sm font-normal">rounded: rounded-full</p>
                        <p className="text-sm font-normal">wheith: font-bold</p>
                        <p className="text-sm font-normal">color: text-white</p>
                        <p className="text-sm font-normal">background bg: bg-blue-general</p>
                        <p className="text-sm font-normal">background bg hover: bg-blue-emphasis</p>
            </div>
            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-4">

            <div>
                <h1 className="text-sm">icon small</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/iconos-spad.svg" alt="" className="h-12" />

                    <div>
                        <p className="text-xs">height: h-12</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-sm">icon medium</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/iconos-spad.svg" alt="" className="h-20" />
                    
                    <div>
                        <p className="text-xs">height: h-20</p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="text-sm">icon max</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/iconos-spad.svg" alt="" className="h-32" />
                    
                    <div>
                        <p className="text-xs">height: h-32</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-4">

            <div>
                <h1 className="text-sm">icon small</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/score-icon.svg" alt="" className="h-12" />

                    <div>
                        <p className="text-xs">height: h-12</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-sm">icon medium</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/score-icon.svg" alt="" className="h-20" />
                    
                    <div>
                        <p className="text-xs">height: h-20</p>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="text-sm">icon max</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/score-icon.svg" alt="" className="h-32" />
                    
                    <div>
                        <p className="text-xs">height: h-32</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">

            <div>
                <h1 className="text-sm">logo small</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/spadLine-logo.svg" alt="" className="h-10" />

                    <div>
                        <p className="text-xs">height: h-10</p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-sm">logo medium</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/spadLine-logo.svg" alt="" className="h-16" />
                    
                    <div>
                        <p className="text-xs">height: h-16</p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-sm">logo medium</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/spadLine-logo.svg" alt="" className="h-28" />
                    
                    <div>
                        <p className="text-xs">height: h-28</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-8">

            <div>
                <h1 className="text-sm">logo small</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/score-logo.svg" alt="" className="h-12" />

                    <div>
                        <p className="text-xs">height: h-12</p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-sm">logo max</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/score-logo.svg" alt="" className="h-20" />
                    
                    <div>
                        <p className="text-xs">height: h-20</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">

            <div>
                <h1 className="text-sm">logo small</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/lenovo-logo.svg" alt="" className="h-7" />

                    <div>
                        <p className="text-xs">height: h-7</p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-sm">logo medium</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/lenovo-logo.svg" alt="" className="h-10" />
                    
                    <div>
                        <p className="text-xs">height: h-10</p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-sm">logo medium</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/lenovo-logo.svg" alt="" className="h-16" />
                    
                    <div>
                        <p className="text-xs">height: h-16</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">

            <div>
                <h1 className="text-sm">logo small</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/innerconsulting-score.svg" alt="" className="h-7" />

                    <div>
                        <p className="text-xs">height: h-7</p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-sm">logo medium</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/innerconsulting-score.svg" alt="" className="h-10" />
                    
                    <div>
                        <p className="text-xs">height: h-10</p>
                    </div>
                </div>
            </div>

            <div >
                <h1 className="text-sm">logo medium</h1>
                    <div className="flex flex-col gap-8 mt-7">
                    <img src="/innerconsulting-score.svg" alt="" className="h-16" />
                    
                    <div>
                        <p className="text-xs">height: h-16</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">


            <div >
                <h1 className="text-sm">empty state</h1>
                    <div className="flex gap-8 mt-7">
                    <img src="/empty-state.svg" alt="" className="h-44" />
                    
                    <div>
                        <p className="text-xs">height: h-44</p>
                    </div>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">


            <div >
                <h1 className="text-sm">user-perfil Photo regular</h1>
                    <div className="flex gap-8 mt-7">

                    
                    <div className="bg-[url('/img-perfil.png')] h-32 w-32 bg-cover bg-center rounded-full border-[6px]">   
                    </div>
                        <p className="text-xs">height: h-32</p>
                        <p className="text-xs">height: w-32</p>
                        <p className="text-xs">rounded: rounded-full</p>
                        <p className="text-xs">outline: border-[6px]</p>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">


            <div >
                <h1 className="text-sm">user-perfil Photo grand</h1>
                    <div className="flex gap-8 mt-7">

                    
                    <div className="bg-[url('/img-perfil.png')] h-44 w-44 bg-cover bg-center rounded-full border-[6px]">   
                    </div>
                        <p className="text-xs">height: h-44</p>
                        <p className="text-xs">height: w-40</p>
                        <p className="text-xs">rounded: rounded-full</p>
                        <p className="text-xs">outline: border-[6px]</p>
                </div>
            </div>

            </div>

    </div>

    <div>
            <div className="border-t-4 border-black "></div>

            <div className="flex gap-6">


            <div >
                <h1 className="text-sm">user-perfil Photo grand</h1>
                    <div className="flex gap-8 mt-7">

                                    <div className="w-72">
                <div className="relative h-10 w-full min-w-[200px]">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent 
                    px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all 
                    placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
                    focus:border-2 focus:border-[#0E6EB9] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute 
                    left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight 
                    text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 
                    before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t 
                    before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none 
                    after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow
                     after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all 
                     peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] 
                     peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent 
                     peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight
                      peer-focus:text-[#0E6EB9] peer-focus:before:border-t-2 peer-focus:before:border-l-2 
                      peer-focus:before:border-[#0E6EB9] peer-focus:after:border-t-2 peer-focus:after:border-r-2 
                      peer-focus:after:border-[#0E6EB9] peer-disabled:text-transparent peer-disabled:before:border-transparent 
                      peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Required
                    </label>
                </div>
                </div>

                    
                    <div>   
                    </div>
                        <p className="text-xs">font size: text-sm</p>
                        <p className="text-xs">focus: border-bluegeneral</p>
                        <p className="text-xs">focus: animation</p>
                        <p className="text-xs">Whith 100%</p>
                </div>
            </div>

            </div>

    </div>
        
    </div>

 </>
  );
};

export default Componentes;