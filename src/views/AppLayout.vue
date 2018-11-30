<template>
  <VApp>
    <!-- TODO: refactor nav drawer -->
    <VNavigationDrawer
      v-model="drawer"
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <VList>
        <template v-for="item in items">
          <VListGroup
            v-if="item.children"
            :key="item.title"
          >
            <VListTile slot="activator">
              <VListTileAction>
                <VIcon
                  light
                  v-text="item.icon"
                />
              </VListTileAction>

              <VListTileContent>
                <VListTileTitle v-text="item.title" />
              </VListTileContent>
            </VListTile>

            <VListTile
              v-for="child in item.children"
              :key="child.title"
              @click="() => {}"
            >
              <VListTileAction>
                <VIcon
                  light
                  v-text="child.icon"
                />
              </VListTileAction>

              <VListTileContent>
                <VListTileTitle v-text="child.title" />
              </VListTileContent>
            </VListTile>
          </VListGroup>

          <VListTile
            v-else
            :key="item.title"
            @click="() => {}"
          >
            <VListTileAction>
              <VIcon
                light
                v-text="item.icon"
              />
            </VListTileAction>

            <VListTileContent>
              <VListTileTitle v-text="item.title" />
            </VListTileContent>
          </VListTile>
        </template>
      </VList>
    </VNavigationDrawer>

    <VToolbar
      fixed
      app
      :clipped-left="clipped"
    >
      <VToolbarSideIcon @click.native.stop="drawer = !drawer" />

      <VBtn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <VIcon v-text="miniVariant ? 'chevron_right' : 'chevron_left'" />
      </VBtn>

      <VBtn
        icon
        @click.stop="clipped = !clipped"
      >
        <VIcon>web</VIcon>
      </VBtn>

      <VBtn
        icon
        @click.native.stop="fixed = !fixed"
      >
        <VIcon>remove</VIcon>
      </VBtn>

      <VToolbarTitle class="headline text-uppercase">
        <span>{{ title }}</span>
        <span class="font-weight-light">
          {{ subTitle }}
        </span>
      </VToolbarTitle>
    </VToolbar>

    <VContent>
      <VContainer
        fluid
        grid-list-md
      >
        <RouterView />
      </VContainer>
    </VContent>

    <VFooter
      :fixed="fixed"
      app
    >
      <span>&copy; 2018</span>
    </VFooter>
  </VApp>
</template>

<script>
export default {
  name: 'AppLayout',

  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        { title: 'Item', icon: 'apps' },
        {
          title: 'Group Item',
          icon: 'view_list',
          children: [
            { title: 'Child Item', icon: 'settings' },
          ],
        },
      ],
      miniVariant: false,
      title: 'Title',
      subTitle: 'Subtitle',
    };
  },
};
</script>
