import React from 'react';
import {JumbotronContainer} from '../container/jumbotron'
import {FooterContainer} from '../container/footer';
import { FaqsContainer } from '../container/faqs';
import { HeaderContainer } from '../container/header';
import { OptForm } from '../components';
import { Feature } from '../components';

export default function Home() {

return(<>

<HeaderContainer>
    <Feature>
        <Feature.Title>
            Unlimited films, TV programmes and more.
        </Feature.Title>
        <Feature.SubTitle>
            Watch AnyWhere. Cancel at any time.
        </Feature.SubTitle>
    </Feature>
        <OptForm>
            <OptForm.Input placeholder="Email Address"/>
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break/>
            <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
        </OptForm>          
</HeaderContainer>
<JumbotronContainer/>
<FaqsContainer/>
<FooterContainer/>

</>
);
}