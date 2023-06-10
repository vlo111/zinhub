'use client';
export default () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-1/2 xs:w-11/12 2xl:w-2/6 2xl:ml-80">
        <h3 className="text-xl text-davy-gray xs:text-center">Գրանցել կազմակերպություն</h3>
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800">
              Կազմակերպության անվանում
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Կազմակերպության անվանում"
            />
            <span className="inline-flex text-sm text-red-600">Այս դաշտը պարտադիր է լրացման.</span>
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                ՀՎՀՀ
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="inline-flex text-sm text-red-700">Այս դաշտը պետք է դատարկ չլինի.</span>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Հեռախոսահամար
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="inline-flex text-sm text-red-700">Այս դաշտը պետք է դատարկ չլինի.</span>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Գաղտնաբառ
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <span className="inline-flex text-sm text-red-700">Այս դաշտը պետք է դատարկ չլինի.</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-20">
            <button className="px-4 py-2 tracking-wide bg-white text-primary-blue border rounded-md hover:bg-primary-blue hover:text-white focus:outline-none focus:bg-primary-blue-light">
              Չեղարկել
            </button>
            <button className="px-4 py-2 tracking-wide text-white bg-primary-blue rounded-md hover:bg-white hover:text-primary-blue hover:border focus:outline-none focus:bg-primary-blue-light">
              Գրանցվել
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Do have an account?{' '}
          <a href="/" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </section>
    </main>
  );
};
