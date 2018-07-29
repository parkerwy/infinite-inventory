<template>
    <v-container>
        <v-layout align-center justify-center row fill-height>
            <v-flex>
                <v-card>
                    <v-card-title><h2>Preferences</h2></v-card-title>
                    <v-card-text>
                        <file-picker label="Inventory Data File" v-model="inventoryDataFile" accept="*.json"></file-picker>
                        <file-picker label="PuTTY" v-model="putty" accept="*.exe"></file-picker>
                        <file-picker label="WinSCP" v-model="winscp" accept="*.exe"></file-picker>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary">Save</v-btn>
                        <v-btn>Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import FilePicker from './FilePicker'

  export default {
    name: 'preference-view',
    components: {FilePicker},
    data: () => ({
      inventoryDataFile: '',
      putty: 'putty.exe',
      winscp: 'winscp.exe'
    }),
    methods: {}
  }
</script>