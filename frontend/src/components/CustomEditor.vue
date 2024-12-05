<script setup>
import { defineProps } from 'vue';

const content = defineModel();
const props = defineProps({
    placeholder: {
        type: String,
        default: true
    }
});

const formats = [
    'font',
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    'list'
];

</script>

<template>
    <Editor v-model="content" editorStyle="height: 240px" class="mb-5" :placeholder="placeholder" :formats="formats">
        <template v-slot:toolbar>
            <span class="ql-formats">
                <!-- Font -->
                <select v-tooltip.bottom="'Font'" class="ql-font">
                    <!-- Add font options here -->
                </select>

                <!-- Basic Formatting -->
                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                <button v-tooltip.bottom="'Strike'" class="ql-strike"></button>

                <!-- Media -->
                <button v-tooltip.bottom="'Link'" class="ql-link"></button>

                <!-- Lists -->
                <button v-tooltip.bottom="'Ordered List'" class="ql-list" value="ordered"></button>
                <button v-tooltip.bottom="'Bullet List'" class="ql-list" value="bullet"></button>
                <button v-tooltip.bottom="'Checklist'" class="ql-list" value="check"></button>

                <!-- Clean Formatting -->
                <button v-tooltip.bottom="'Clean Formatting'" class="ql-clean"></button>
            </span>
        </template>
    </Editor>
</template>