
import FormItem from '@/components/form/item';
import { Textarea } from '@/components/texarea';
import CKEditorComponent from '../editor';
import Grid from '../../../course/components/flex/grid';
import Row from '../../../course/components/flex/row';

const JobDescription = () => {
  return (
    <Grid>
      <Row>
        <FormItem label="Աշխատանքի նկարագրություն" name="workDescription">
          <Textarea name="workDescription" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Պարտականություններ" name="responsibilities">
          <CKEditorComponent name='responsibilities' fieldName='Պարտականություններ'/>
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Անհրաժեշտ հմտություններ" name="skills">
          <CKEditorComponent name='skills' fieldName='Անհրաժեշտ հմտություններ'/>
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Հավելյալ նշումներ" name="additionalNotes">
          <Textarea name="additionalNotes" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Ինչ ենք մենք առաջարկում (Ընկերության մասին)" name="whatWeOffer">
          <Textarea name="whatWeOffer" />
        </FormItem>
      </Row>
    </Grid>
  );
};

export default JobDescription;
