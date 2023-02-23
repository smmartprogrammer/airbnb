import { useRouter } from "next/router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { format } from "date-fns";
import InfoCards from "../Components/InfoCards";

interface SearchProps {
  searchResults: {
    img: string;
    location: string;
    title: string;
    description: string;
    star: string;
    price: string;
    total: string;
  }[] ;
}

// interface DateFormat = {
//   startDate: Date | number
//   endDate: Date | number
// }

function Search({ searchResults }: SearchProps) {
  const router = useRouter();


  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStarDate = format(new Date(startDate as string) , "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy");

  const range = `${formattedStarDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays for {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCards
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function  getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then
  (res => res.json);

  return {
    props: {
      searchResults: searchResults,
    },
  };
};
