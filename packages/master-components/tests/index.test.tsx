import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from '../packages/master-components/src/lib/Button';

describe('Button works', () => {
	it('renders a button', () => {
		const buttonComponent = <Button />;

		render(buttonComponent);

		const buttonElement = screen.getByText('button');
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toHaveTextContent('button');
	});
});
