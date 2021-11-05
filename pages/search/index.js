import tw from 'tailwind-styled-components';
import SearchDestination from '../../components/SearchDestination';

const Search = () => {
  return (
    <Wrapper>
      <SearchDestination />
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.section`
  flex flex-col h-screen container m-auto max-w-screen-md 
  bg-gray-200 border border-gray-100
`;
