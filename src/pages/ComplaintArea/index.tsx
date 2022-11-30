import React, { useState } from 'react';
import { Logo } from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ControlledInputComplaint } from '../../components/ControlledInputComplaint';
import axios from 'axios';
import { TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView } from 'react-native';

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
    const navigation = useNavigation()
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


    const [selected, setSelected] = useState('');

    const HospitalData = [
        { key: '1', value: 'Hospital Geral de Guaianases' },
        { key: '2', value: 'Hospital Delphina Rinaldi Abdel Aziz' },
        { key: '3', value: 'Hospital Rio Mar' },
        { key: '4', value: 'Hospital Santa Marcelina' },
        { key: '5', value: 'Hospital Albert Einstein' },
        { key: '6', value: 'Hospital Getúlio Vargas' },
        { key: '7', value: 'Hospital Central de Guaianases' },
        { key: '8', value: 'Hospital Municipal Souza Aguiar' },
        { key: '9', value: 'Hospital Universitário Francisca Mendes' },
        { key: '10', value: 'Hospital Adventista de Manaus' },
        { key: '11', value: 'Hospital São Miguel' },
    ]
    const data = [
        { key: '1', value: 'Má Higiene' },
        { key: '2', value: 'Mau atendimento' },
        { key: '3', value: 'Falta de Médicos' },
        { key: '4', value: 'Falta de insumos' },
        { key: '5', value: 'Demora no atendimento' },
        { key: '6', value: 'Descumprimento de cronograma' },
        { key: '7', value: 'Falta de equipamentos necessários' },


    ]


    const [dataType, setDataType] = useState('')
    async function handleSubmitComplaint(form: FormData) {


        const formComplaint = new FormData();

        formComplaint.append('emailUsuario', 'LeandroCoelho@gmail.com');
        formComplaint.append('tipoReclamacao', dataType);
        formComplaint.append('txtReclamacao', form.Complaint);



        await axios.post('http://192.168.15.45/buscaSus/api/area-usuario/Reclamacao/', formComplaint,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

    }


    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            
            <Filds>
            <KeyboardAvoidingView behavior="position" enabled>
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
                    onSelect={() => setDataType(selected)}

                />
                <SelectList
                    setSelected={(item: any) => setSelected(item)}
                    data={HospitalData}
                    save="value"
                    boxStyles={{ borderRadius: 10, borderColor: '#45CA99', margin: 40, marginBottom: 0 }}
                    dropdownStyles={{ borderRadius: 10, borderColor: '#45CA99', margin: 40, marginBottom: 0 }}
                    placeholder='Selecione o Hospital'
                    onSelect={() => setDataType(selected)}

                />
                </KeyboardAvoidingView>
            </Filds>
            <Footer>
                <Button
                    Title='Enviar reclamação'
                    onPress={handleSubmit(handleSubmitComplaint)}
                />
            </Footer>
            
        </Container>
   </TouchableWithoutFeedback> 
   );
}
