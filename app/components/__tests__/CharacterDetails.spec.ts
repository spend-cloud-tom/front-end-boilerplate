import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '~/components/Application/Character/CharacterDetails.vue'

describe('characterDetails.vue', () => {
  const mockData = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    species: 'Human',
    status: 'Alive',
    origin: 'Earth (C-137)',
    episodes: ['S01E01', 'S01E02'],
  }

  it('renders an error message when error prop is set', () => {
    const wrapper = mount(Component, {
      props: {
        data: null,
        loading: false,
        error: 'Failed to load character details',
      },
    })

    expect(wrapper.text()).toContain('Error!')
    expect(wrapper.text()).toContain('Failed to load character details')
  })

  it('renders back button correctly', () => {
    const wrapper = mount(Component, {
      props: {
        data: mockData,
        loading: false,
        error: null,
      },
    })

    const backButton = wrapper.find('[data-label="back-button"]')
    expect(backButton.exists()).toBe(true)
  })
})
