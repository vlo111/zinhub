import Grid from '@/app/posts/course/components/flex/grid';
import Row from '@/app/posts/course/components/flex/row';
import FormItem from '@/components/form/item';
import { Textarea } from '@/components/texarea';
import CKEditorComponent from '../editor';

const JobDescription = () => {
  return (
    <Grid>
      <Row>
        <FormItem label="Աշխատանքի նկարագրություն" name="description">
          <Textarea name="description" />
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Պարտականություններ" name="responsibilities">
          <CKEditorComponent name='responsibilities'/>
        </FormItem>
      </Row>
      <Row>
        <FormItem label="Անհրաժեշտ հմտություններ" name="skills">
          <CKEditorComponent name='skills'/>
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
