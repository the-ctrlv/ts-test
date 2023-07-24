import './App.css';

import ImgPlayBtn from './assets/play-btn.png';
import ImgPlusBtn from './assets/plus-btn.png';

function App() {
    return (
        <section className="relative min-h-screen py-10">
            <h1 className="section-title text-center mb-1">Example App</h1>
            <div className="video-container h-[300px] w-screen bg-gray-300 relative mb-2">
                <img
                    src={ImgPlayBtn}
                    alt="play-btn"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 cursor-pointer"
                />
            </div>
            <div className="max-w-4xl mx-auto px-4">
                <div className="md:flex justify-between gap-4">
                    <div className="w-full md:w-1/2">
                        <h3 className="section-title">Title section</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat ipsum ac turpis
                            placerat elementum. Cras quis mi in velit ullamcorper fermentum vel vitae ipsum. Morbi mi
                            nulla, gravida eget ullamcorper condimentum, congue id eros. Suspendisse potenti. Aenean
                            quam urna, mattis a neque et, accumsan commodo nunc.
                        </p>
                    </div>
                    <span className="md:hidden divider m-4 bg-slate-300 h-[1px] block max-w-4xl" />
                    <div className="w-full md:w-1/2">
                        <h3 className="section-title">Title section 2</h3>
                        <ul>
                            <li className="flex items-center">
                                <img
                                    src={ImgPlusBtn}
                                    alt="plus-btn"
                                    className="inline-block w-4 h-4 mr-2 cursor-pointer"
                                />
                                <p>Proin nulla orci, sodales tincidunt ipsum id</p>
                            </li>
                            <li className="flex items-center">
                                <img src={ImgPlusBtn} alt="plus-btn" className="inline-block w-4 h-4 mr-2" />
                                <p>Proin nulla orci, sodales tincidunt ipsum id</p>
                            </li>
                            <li className="flex items-center">
                                <img src={ImgPlusBtn} alt="plus-btn" className="inline-block w-4 h-4 mr-2" />
                                <p>Proin nulla orci, sodales tincidunt ipsum id</p>
                            </li>
                            <li className="flex items-center">
                                <img src={ImgPlusBtn} alt="plus-btn" className="inline-block w-4 h-4 mr-2" />
                                <p>Proin nulla orci, sodales tincidunt ipsum id</p>
                            </li>
                            <li className="flex items-center">
                                <img src={ImgPlusBtn} alt="plus-btn" className="inline-block w-4 h-4 mr-2" />
                                <p>Proin nulla orci, sodales tincidunt ipsum id</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="divider m-4 bg-slate-300 h-[1px] block max-w-4xl" />
                <div className="w-full text-center">
                    <h3 className="section-title text-start md:text-center">Title section 3</h3>
                    <p className="mb-4 text-start">
                        Donec ut ligula pretium nisl tempor dictum. Nam consequat convallis quam. Sed a elit tellus.
                        Duis scelerisque, justo non vehicula aliquet, orci metus laoreet libero, commodo commodo ex
                        lorem ac dui. Pellentesque vel tincidunt quam, eget dapibus neque. Vestibulum congue lacinia
                        est. Curabitur sit amet tempus erat.
                    </p>
                    <button
                        className="btn btn--primary mx-auto"
                        onClick={() => {
                            alert('Hello World!');
                        }}
                    >
                        Primary Button
                    </button>
                </div>
            </div>
        </section>
    );
}

export default App;
