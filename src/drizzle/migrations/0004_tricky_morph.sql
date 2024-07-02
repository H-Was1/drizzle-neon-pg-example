ALTER TABLE "user" DROP CONSTRAINT "user_age_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");