import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Forms from "@/components/forms.vue";
const db = require("../api/db.json");
describe("Form Component", () => {
    it.skip("the component should return input type text", async () => {
        const wrapper = mount(Forms, {
            props: {
                forms : db
            }
        });
        const input = wrapper.find("input[type='text']");
        await wrapper.find("input[type='text']").setValue("Hello World")

        expect(input.element).toContain("Hello World");
    })
})