import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockRouter from 'next-router-mock'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, vi, test } from 'vitest';
import { LinkCustomizavel } from './link';

vi.mock('next/router', ()=> require('next-router-mock') )

describe('testando componente de link', () => {
  test('testando se o link do texto esta correto', ()=>{
    render(<LinkCustomizavel href={'/testando'}>testando</LinkCustomizavel>)
    const link=screen.getByText('testando')
    expect(link.textContent).toBe('testando')
  })

});

  describe('teste de funcionalidade do link', ()=>{
    test('testando se o link esta levando a rota especifica', ()=>{
      mockRouter.push("/inicial");
      render(<LinkCustomizavel href={'/testando'}>testando</LinkCustomizavel>, { wrapper: MemoryRouterProvider })
      const link=screen.getByText('testando')
      fireEvent.click(link)
      expect(mockRouter).toMatchObject({
        asPath:'/testando', 
        pathname: '/testando'
      })
    })
    test('testando se o documento esta renderizado em tela', ()=>{
      render(<LinkCustomizavel href={'/testando'}>testando</LinkCustomizavel>)
      const link=screen.getByText('testando')
      expect(link).toBeInTheDocument()
    })
  })