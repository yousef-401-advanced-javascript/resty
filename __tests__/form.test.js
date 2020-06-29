import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });
import Form from './../components/form/form.js';


describe('<Form />', ()=>{
    it('Make sure there is an input', () => {
        const result = mount(<Form />);
        result.find('#urll').simulate('change', { target: { value: '1234567890!!!' } });
        expect(result.state().url).toEqual("1234567890!!!");
      });
      
      it('Make sure the input same the output', () => {
        const result = mount(<Form />);
        result.find('#urll').simulate('change', { target: { value: '1234567890!!!' } });
        result.find('#get').simulate('click', { target: { id: 'get' } });
        result.find('form').simulate('submit', { //preventDefault: () => {}
        });
        expect(result.find('.results').html()).toEqual(
            '<section class="results"><span class="method">get</span><span class="url">1234567890!!!</span></section>');
      });

    it("when form is submitted, text area gets emptied", () => {
        const form = mount(<Form />);

        form.find('#urll').simulate('change', {
          target: { value: 'new comment' }
        });
        form.find('#get').simulate('click', {target:{id:'get'}});
        expect(form.state().url).toEqual('new comment');
        form.find('form').simulate('submit', { //preventDefault: () => {}
        });
        expect(form.state().url).toEqual('');
      });
});