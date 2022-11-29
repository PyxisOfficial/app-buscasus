import React, { useState } from 'react';
import { Logo } from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ControlledInputComplaint } from '../../components/ControlledInputComplaint';
import axios from 'axios';

import {
    Container,
    Return,
    Header,
    IconReturn,
    TitleProject,
    Title,
    WhatsHappend,
    Footer,
    Filds,
} from './styles';
import { Button } from '../../components/Button';




interface FormData {
    [Complaint: string]: any;

}

const schema = Yup.object().shape({

    Complaint: Yup
        .string()
        .required('Informe o motivo da reclamação'),

})


export function ComplaintArea({ route }: any) {

    const {
        formState: { errors },
        handleSubmit,
        control,
        reset

    } = useForm({
        resolver: yupResolver(schema)
    })

    const {
        name,
        endereço,
        cep,
        city,
        bairro,
        uf,
        abertura,
        fechamento,
        telefone,
        foto,
        urlHospital,
        idHospital,
    } = route.params;

    const navigation = useNavigation();

    const [selected, setSelected] = useState('');

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    async function handleSubmitComplaint(form: FormData) {
        const formComplaint = new FormData();

        formComplaint.append('emailUsuario', 'LeandroCoelho@gmail.com');
        formComplaint.append('tipoReclamacao', 'ESTADO QUE ARMAZENA O TIPO');
        formComplaint.append('txtReclamacao', form.Complaint);
        formComplaint.append('dataReclamacao', 'gerada automaticamente');
        formComplaint.append('dataPlantao', '?');

        await axios.post('http://192.168.15.45/buscaSus/api/area-usuario/Reclamacao/', formComplaint,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
    }


    return (
        <Container>
            <Filds>
                <Header>
                    <Return
                        onPress={() => navigation.navigate('HospitalPage', {
                            name: name,
                            endereço: endereço,
                            cep: cep,
                            city: city,
                            bairro: bairro,
                            uf: uf,
                            abertura: abertura,
                            fechamento: fechamento,
                            telefone: telefone,
                            foto: foto,
                            urlHospital: urlHospital,
                            idHospital: idHospital,
                        })}>
                        <IconReturn name='arrowleft' />
                    </Return>

                    <Logo height={50} width={50} />
                    <TitleProject>BuscaSus</TitleProject>
                </Header>

                <WhatsHappend>
                    <Title>Descreva o porque da reclamação</Title>

                    <ControlledInputComplaint
                        name="Complaint"
                        control={control}
                        placeholder='Ex: Medico X não estava de plantão'
                        autoCapitalize='sentences'
                        autoCorrect={false}
                        error={errors.userName && errors.userName.message} />
                </WhatsHappend>

                <SelectList
                    setSelected={(item: any) => setSelected(item)}
                    data={data}
                    save="value"
                    boxStyles={{ borderRadius: 10, borderColor: '#45CA99', margin: 40, marginBottom: 0 }}
                    dropdownStyles={{ borderRadius: 10, borderColor: '#45CA99', margin: 40, marginBottom: 0 }}
                    placeholder='Selecione o motivo'

                />
            </Filds>
            <Footer>
                <Button
                    Title='Enviar reclamação'
                    onPress={handleSubmit(handleSubmitComplaint)}
                />
            </Footer>
        </Container>
    );
}
