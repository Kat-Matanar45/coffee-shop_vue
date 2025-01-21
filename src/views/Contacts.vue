<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent />
                    </div>
                </div>
                <HeaderComponent :titleHeader="titleHeader" />
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">

                        <form @submit.prevent="submit" action="#" class="mt-5">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input type="text" class="form-control" id="name-input" v-model="v$.name.$model">
                                    <span v-for="error in v$.name.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input type="email" class="form-control" id="email-input" v-model="v$.eMail.$model">
                                    <span v-for="error in v$.eMail.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input type="tel" class="form-control" id="phone-input" v-model="v$.phone.$model">
                                    <span v-for="error in v$.phone.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-start">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea class="form-control" name="message" id="message" rows="5"
                                        placeholder="Leave your comments here" v-model="v$.text.$model"></textarea>
                                    <span v-for="error in v$.text.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <button type='submit' class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'

import { minLength } from '@/validators/minLength'

export default {
    components: {
        NavBarComponent,
        HeaderComponent
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            name: '',
            eMail: '',
            phone: '',
            text: '',
            titleHeader: 'Contact us'
        }
    },
    validations() {
        return {
            name: { required },
            phone: {},
            eMail: { required, email },
            text: {
                required,
                maxLength: maxLength(100),
                minLength: helpers.withMessage('Сообщение должно быть больше 10 символов', minLength)
            }
        }
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return;

            const message = {
                name: this.name,
                phone: this.phone,
                eMail: this.eMail,
                text: this.text
            }

            fetch('http://localhost:3000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            this.name = '';
            this.phone = '';
            this.eMail = '';
            this.text = '';

            this.v$.$reset();

            alert('Сообщение отправлено успешно!');
        }
    }
}


</script>