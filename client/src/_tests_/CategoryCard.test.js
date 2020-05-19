import React from 'react';
import { render, cleanup } from '@testing-library/react'
import CategoryCard from '../components/CategoryCard/CategoryCard';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

const props = {
    item:{
    img:"",
    core: 'hello'
    }
}

describe('<Category component>', () => {
    test('should be defined', () => {
        expect(CategoryCard).toBeDefined();
    });
    test('renders Category Component', () => {
        const { container, rerender } = render(<CategoryCard {...props} />)
        rerender(<CategoryCard {...props} />)
        expect(container.firstChild).toMatchSnapshot()
      })
})
