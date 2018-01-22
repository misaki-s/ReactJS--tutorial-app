// Download yarn add enzyme enzyme-adapter-react-16 raf
// Create setupTests.js
// Create jest.config.json
// Change the test in package.json to "jest --config=jest.config.json"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});