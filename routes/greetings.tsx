import Layout from "../components/Layout.tsx";
import SuperCenter from "../components/SuperCenter.tsx";

const GreetingsPage = ({ name }) => {
  return (
    <Layout>
      <SuperCenter>
        <p className="text-3xl px-3 md:px-0 font-bold bg-gradient-to-r from-gray-800 to-blue-700">
          Hello, {name}. Thanks for visiting us!
        </p>
      </SuperCenter>
    </Layout>
  );
};

export default GreetingsPage;
