import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7f2be7fc-ae58-4899-a4f1-a10c70d2a64a', '1Alanna.Zulauf72@yahoo.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('64d2c66d-fe54-414b-b36a-fed52a0fa808', '7Presley.Skiles@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=9', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('863d4354-5186-49b9-8c46-2151247809ce', '13Jeffery31@gmail.com', 'Dana Lee', 'https://i.imgur.com/YfJQV5z.png?id=15', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('34567765-0fba-4760-8e31-5f2d570d4365', '19Shanna_Ferry-Hauck@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('60cd8df5-3fb8-4ec4-b5b9-24460d973820', '25Isabella.Maggio@gmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=27', 'suspended', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('abceaa03-69bd-4cda-8829-300e35cb5f1e', '31Scotty.Rau@yahoo.com', 'Dana Lee', 'https://i.imgur.com/YfJQV5z.png?id=33', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('02800396-7e32-4b03-b349-69b1fe40efc3', '37Bobbie_Douglas-Abernathy@gmail.com', 'Dana Lee', 'https://i.imgur.com/YfJQV5z.png?id=39', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2bbad099-48a2-4a3a-834d-9f5f42ea13ec', '49Kenny_Dickinson47@hotmail.com', 'Dana Lee', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('42cf8e70-0588-475a-8c09-981803734d25', '55Brant.Smith@hotmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('98741209-0fed-4b24-8e17-9644251f0291', 'Operator Schedule', 'New insights are available on your dashboard.', 'HR Department', '64Keyshawn.Kreiger18@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7841300a-57db-4066-a411-d30fcd0ef1e4', 'Order Update', 'Congratulations a new milestone in production has been reached', 'Production Manager', '71Hilbert.Bartell@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '2bbad099-48a2-4a3a-834d-9f5f42ea13ec');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3564bc51-8b44-4b6e-8479-a07ee29a22a0', 'Dashboard Insights', 'New insights are available on your dashboard.', 'Admin', '78Lessie.Christiansen-Maggio@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '02800396-7e32-4b03-b349-69b1fe40efc3');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d8ffcf70-c8df-4170-8358-e2364acdb5d0', 'New Product Alert', 'Check out the new product now available', 'Admin', '85Murl_OKon7@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '42cf8e70-0588-475a-8c09-981803734d25');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2ff046f3-692e-4d62-abd8-1d433fbb31e5', 'Order Update', 'Check out the new product now available', 'HR Department', '92Cassandre.Schaefer@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e87b3134-0402-48f6-8a6b-6e6dd4b8012a', 'Production Milestone', 'Congratulations a new milestone in production has been reached', 'Product Team', '99Candelario.Muller@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '02800396-7e32-4b03-b349-69b1fe40efc3');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a1578005-836b-4a6a-914f-1838dcc8f8fe', 'Operator Schedule', 'Your order status has been updated.', 'Production Manager', '106Jaren69@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'abceaa03-69bd-4cda-8829-300e35cb5f1e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('21c2bd3a-be84-4152-9694-d5c8710f4a6e', 'Production Milestone', 'Your schedule has been updated please check.', 'Production Manager', '113Louvenia_Spencer88@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2461add0-95a9-4d0d-bc6d-f2ae4bee9a59', 'Dashboard Insights', 'Your order status has been updated.', 'HR Department', '120Wade.Armstrong82@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '42cf8e70-0588-475a-8c09-981803734d25');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f00142de-6892-4109-bcd4-ef5b5014e4f9', 'Production Milestone', 'Congratulations a new milestone in production has been reached', 'Product Team', '127Twila20@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '64d2c66d-fe54-414b-b36a-fed52a0fa808');

INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('c6214974-82e8-4072-8a6d-6af517bdf0bb', 'Cancelled', 452, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('00b8de96-986a-4807-bbcb-1e5e4b753181', 'Shipped', 92, '02800396-7e32-4b03-b349-69b1fe40efc3');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('b874df82-f5b9-469a-aae9-6a1ec127b20b', 'Cancelled', 787, '2bbad099-48a2-4a3a-834d-9f5f42ea13ec');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('8025765f-2c49-4407-a1cc-699b8c3b2f6e', 'Cancelled', 567, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('c20844be-73c3-40b8-807e-a4df0dc209b6', 'Shipped', 170, '60cd8df5-3fb8-4ec4-b5b9-24460d973820');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('5943366d-9fd7-4db4-a765-3eef25d28d80', 'Completed', 601, '42cf8e70-0588-475a-8c09-981803734d25');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('759523f3-ee63-407c-a9d4-0d9b2520c3ea', 'In Progress', 292, '863d4354-5186-49b9-8c46-2151247809ce');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('798303b7-e773-49e5-8463-3eecddf72a79', 'In Progress', 642, '64d2c66d-fe54-414b-b36a-fed52a0fa808');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('e11da466-cf4d-4989-a7ab-35d1ebac33e4', 'Cancelled', 317, 'abceaa03-69bd-4cda-8829-300e35cb5f1e');
INSERT INTO "order" ("id", "status", "totalPrice", "userId") VALUES ('d6296f47-6a4c-4c6d-8b8c-f04bb423365c', 'In Progress', 461, '863d4354-5186-49b9-8c46-2151247809ce');

INSERT INTO "product" ("id", "name", "description", "price") VALUES ('7ea0cced-2167-49db-8bd1-96997353460d', 'BetaGadget', 'Durable tool designed for heavyduty operations.', 992);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('b0c754cd-b99f-407c-b76c-f5e80ca1957b', 'AlphaWidget', 'Efficient equipment for professional settings.', 131);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('ebbfae2d-8294-4a1c-8fdb-81beb404d082', 'GammaTool', 'Durable tool designed for heavyduty operations.', 967);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('c47e1dd0-866f-4ab8-a6fc-07ee7c638033', 'BetaGadget', 'Compact and versatile gadget for everyday tasks.', 46);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('fd4a9eb8-00b3-4dfc-ad87-aaebb55738aa', 'AlphaWidget', 'High precision widget for industrial use.', 413);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('5cac4f51-d919-4203-ae06-3e52b8a5c7d5', 'EpsilonEquipment', 'Durable tool designed for heavyduty operations.', 940);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('6cc3fbab-7374-4c25-b179-3b39371b5e3a', 'BetaGadget', 'High precision widget for industrial use.', 894);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('0f68e24e-1e3e-45c0-b5fb-549560b36ebf', 'EpsilonEquipment', 'Compact and versatile gadget for everyday tasks.', 918);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('ac42cbd7-58dc-42ba-bc3a-aa5737dc165c', 'AlphaWidget', 'Advanced device for tech enthusiasts.', 559);
INSERT INTO "product" ("id", "name", "description", "price") VALUES ('7e0e8d53-ce85-4c76-9488-aee3aa59c973', 'GammaTool', 'High precision widget for industrial use.', 439);

INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('02d1051e-eeda-40e2-953c-d2e9ea7c013b', 732, 'c20844be-73c3-40b8-807e-a4df0dc209b6', 'ebbfae2d-8294-4a1c-8fdb-81beb404d082');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('6d557bf0-b5d6-4966-a8e2-0fc142063d4a', 386, 'c20844be-73c3-40b8-807e-a4df0dc209b6', '5cac4f51-d919-4203-ae06-3e52b8a5c7d5');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('0aa66e34-c1c8-4610-a1f9-700c7be1d8fb', 164, '00b8de96-986a-4807-bbcb-1e5e4b753181', '6cc3fbab-7374-4c25-b179-3b39371b5e3a');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('30dd6a20-9618-417b-afcd-4699c2004467', 48, 'c20844be-73c3-40b8-807e-a4df0dc209b6', 'b0c754cd-b99f-407c-b76c-f5e80ca1957b');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('8a3f6772-c04c-4d48-85cd-b014789089cc', 137, 'e11da466-cf4d-4989-a7ab-35d1ebac33e4', '5cac4f51-d919-4203-ae06-3e52b8a5c7d5');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('9764a288-5a35-4a63-b43a-5c7dd71cb649', 149, '00b8de96-986a-4807-bbcb-1e5e4b753181', 'ebbfae2d-8294-4a1c-8fdb-81beb404d082');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('9860ea57-3167-409c-b094-616d05e42830', 250, 'c20844be-73c3-40b8-807e-a4df0dc209b6', '6cc3fbab-7374-4c25-b179-3b39371b5e3a');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('bda95760-ef17-4b32-a8a3-3a3a904e0ea7', 191, 'd6296f47-6a4c-4c6d-8b8c-f04bb423365c', '7e0e8d53-ce85-4c76-9488-aee3aa59c973');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('d28e0406-807a-425f-aad5-251572e12b87', 461, '8025765f-2c49-4407-a1cc-699b8c3b2f6e', '7ea0cced-2167-49db-8bd1-96997353460d');
INSERT INTO "order_product" ("id", "quantity", "orderId", "productId") VALUES ('1d7a08f3-107f-453e-8cf5-8c715ada52cb', 874, '8025765f-2c49-4407-a1cc-699b8c3b2f6e', '0f68e24e-1e3e-45c0-b5fb-549560b36ebf');

INSERT INTO "operator" ("id", "name", "email") VALUES ('74b35d84-9610-4b68-a34c-18ec21a5ab7b', 'Linda Brown', '222Rosemarie_Weber@hotmail.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('16181db6-9dfe-46fb-88a4-d349aa3f298a', 'Linda Brown', '225Kareem.Stroman48@gmail.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('98dff76c-f898-4a1d-b625-0b0d87108c44', 'Michael Davis', '228Emmanuelle_Stehr40@yahoo.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('d10011e1-48c3-48d2-b3ee-f5b8ced81643', 'James Smith', '231Icie_Stanton@yahoo.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('18a76d3d-1e2c-4b4a-9642-9b83678adf2c', 'Linda Brown', '234Lukas.McClure@hotmail.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('9fd611fb-a601-4502-bb3b-7ab81e1642b7', 'Maria Garcia', '237Freda55@gmail.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('4256cb60-8af9-4fa6-a680-2135064452cd', 'Maria Garcia', '240Isac24@hotmail.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('5bb51ca9-0691-4598-b40c-84a8866fb162', 'Michael Davis', '243Emily.Wunsch@gmail.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('8586ef71-8b7a-4576-8c3b-b4d7a433a26a', 'Linda Brown', '246Laura_Morissette36@yahoo.com');
INSERT INTO "operator" ("id", "name", "email") VALUES ('f2abcaba-9632-445b-b19f-34b11507b466', 'James Smith', '249Dashawn1@gmail.com');

INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('e958e40d-218c-4d09-98f9-7ad4c40087f0', 'Quality Check', '2024-02-09T20:58:46.273Z', 'e11da466-cf4d-4989-a7ab-35d1ebac33e4', '98dff76c-f898-4a1d-b625-0b0d87108c44');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('5c1ae59b-8cdc-4eab-99e2-d53eab5c987e', 'Maintenance', '2024-06-30T06:14:28.765Z', 'b874df82-f5b9-469a-aae9-6a1ec127b20b', '98dff76c-f898-4a1d-b625-0b0d87108c44');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('7571feca-c1d5-41e8-a3e0-897218b4e19f', 'Material Preparation', '2024-02-05T04:57:46.417Z', 'c6214974-82e8-4072-8a6d-6af517bdf0bb', 'f2abcaba-9632-445b-b19f-34b11507b466');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('ca8ad956-2fc1-477c-aae0-f5ee7ad658b8', 'Maintenance', '2024-02-28T09:19:11.589Z', '5943366d-9fd7-4db4-a765-3eef25d28d80', '5bb51ca9-0691-4598-b40c-84a8866fb162');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('72fac590-751a-4e07-a265-8da89e23bd26', 'Maintenance', '2023-12-31T15:09:43.916Z', 'c20844be-73c3-40b8-807e-a4df0dc209b6', 'f2abcaba-9632-445b-b19f-34b11507b466');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('eed2cc6e-6bbb-4e2e-b2ad-0ac9ece25261', 'Maintenance', '2023-05-11T11:48:28.692Z', '8025765f-2c49-4407-a1cc-699b8c3b2f6e', '16181db6-9dfe-46fb-88a4-d349aa3f298a');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('22f3c787-842f-48d5-9934-6fb8093d06c1', 'Quality Check', '2024-12-18T08:26:52.811Z', '759523f3-ee63-407c-a9d4-0d9b2520c3ea', '8586ef71-8b7a-4576-8c3b-b4d7a433a26a');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('158bb7c1-3e7c-41b3-9c74-efe287c54e60', 'Maintenance', '2024-10-14T06:42:10.070Z', 'b874df82-f5b9-469a-aae9-6a1ec127b20b', '9fd611fb-a601-4502-bb3b-7ab81e1642b7');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('a7a8e224-a38d-4502-a7e5-6292c9fb7df7', 'Material Preparation', '2023-07-23T20:39:04.647Z', 'd6296f47-6a4c-4c6d-8b8c-f04bb423365c', 'd10011e1-48c3-48d2-b3ee-f5b8ced81643');
INSERT INTO "production_activity" ("id", "activityType", "timestamp", "orderId", "operatorId") VALUES ('9d023f41-e8ed-4584-9d4c-46fba6d757ca', 'Quality Check', '2024-07-22T23:11:34.063Z', 'b874df82-f5b9-469a-aae9-6a1ec127b20b', '18a76d3d-1e2c-4b4a-9642-9b83678adf2c');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
