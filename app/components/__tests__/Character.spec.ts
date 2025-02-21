import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '~/components/Application/Character/Character.vue'

describe('character.vue', () => {
  it('renders the title correctly', () => {
    const wrapper = mount(Component, {
      props: {
        title: 'Character List',
        characterList: [],
        isCharactersLoading: false,
        error: '',
      },
    })
    expect(wrapper.find('h1').text()).toContain('Welcome to Character List')
  })

  it('displays the error message when error prop is passed', () => {
    const wrapper = mount(Component, {
      props: {
        title: 'Character List',
        characterList: [],
        isCharactersLoading: false,
        error: 'Something went wrong!',
      },
    })
    expect(wrapper.find('.error-notification').exists()).toBe(true)
    expect(wrapper.text()).toContain('Error! Something went wrong!')
  })

  it('emits "loadMore" event when the "Load More" button is clicked', async () => {
    const characterList = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
      },
    ]
    const wrapper = mount(Component, {
      props: {
        title: 'Character List',
        characterList: characterList as [],
        isCharactersLoading: false,
        error: null,
      },
    })

    const loadMoreButton = wrapper.find('[data-label="load-more"]')
    expect(loadMoreButton.exists()).toBe(true)
    await loadMoreButton.trigger('click')
    expect(wrapper.emitted('loadMore')).toBeDefined()
  })

  it('changes the view to "grid" when the "Grid" button is clicked', async () => {
    const wrapper = mount(Component, {
      props: {
        title: 'Character List',
        characterList: [],
        isCharactersLoading: false,
        error: '',
      },
    })

    const gridButton = wrapper.find('[data-label="Grid"]')
    await gridButton.trigger('click')
    expect((wrapper as any).vm.selectedView).toBe('grid')
  })

  it('changes the view to "list" when the "List" button is clicked', async () => {
    const wrapper = mount(Component, {
      props: {
        title: 'Character List',
        characterList: [],
        isCharactersLoading: false,
        error: '',
      },
    })

    const listButton = wrapper.find('[data-label="List"]')
    await listButton.trigger('click')
    expect((wrapper as any).vm.selectedView).toBe('list')
  })
})
