const React = require('react');
const {mount}=require('enzyme');
const{Game} = require('../src/Game');

test('game',() =>{
    const driver = mount(<Game/>);
    let card = driver.find('.kart');
   // expect(card.length).toEqual(3);
} )
test('click',() =>{
    const driver = mount(<Game/>);
    let card = driver.find('.kart').at(0);
    let card1 = driver.find('.kart').at(1);
    let card2 = driver.find('.kart').at(2);
    card.simulate('click');
    card1.simulate('click');
    card2.simulate('click');
    card.find("img").prop("src");
})
test('isValid',() =>{
    const driver = mount(<Game/>);
    const src = driver.find('.kart')
    if(src === 'img/Kedi.jpg' || src === 'img/Kopek.jpg') {
        expect(received).toBeTruthy();
    }
})
